// Lightweight loader to parse disorders data from an Excel file in /public
// Requires dependency: xlsx

export async function loadDisordersFromXlsx() {
  try {
    const XLSX = (await import("xlsx")).default;
    let workbook;

    // Try reading from filesystem on the server (preferred)
    try {
      const { readFile } = await import("fs/promises");
      const path = await import("path");
      const serverPath = path.join(process.cwd(), "public", "disorders data.xlsx");
      const buf = await readFile(serverPath);
      workbook = XLSX.read(buf, { type: "buffer" });
    } catch (e) {
      // Fallback: fetch in the browser/client if FS isn't available
      if (typeof window !== "undefined") {
        const filePath = "/disorders%20data.xlsx";
        const res = await fetch(filePath);
        if (!res.ok) throw new Error(`Failed to fetch ${filePath}`);
        const arrayBuffer = await res.arrayBuffer();
        workbook = XLSX.read(arrayBuffer, { type: "array" });
      } else {
        throw e;
      }
    }
    const firstSheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[firstSheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

    const toSlug = (str) =>
      String(str || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    // Expect columns: Title, Description, Image, Highlights, LongDescription
    const details = {};
    for (const row of rows) {
      const title = row.Title || row.name || row.Diagnosis || row.Disorder || "";
      if (!title) continue;
      const slug = toSlug(title);
      const highlightsRaw = row.Highlights || row.Tags || "";
      const highlights = String(highlightsRaw)
        .split(/[,;\n]/)
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 8);
      const image = row.Image || "/images/updatedimg/Our_approach/Picture19.jpg";
      const contentImage = row.ContentImage || "";
      const longDescription = row.LongDescription || row.Content || row.Body || "";
      const description = row.Description || row.Summary || "";

      details[slug] = {
        title,
        image,
        contentImage: contentImage || undefined,
        description,
        highlights: highlights.length ? highlights : ["Specialized Care"],
        longDescription: longDescription
          ? String(longDescription)
          : `<p>${description}</p>`,
        meta: {
          title: `${title} | Swanthana`,
          description: description || `${title} care at Swanthana`,
        },
      };
    }

    return details;
  } catch (err) {
    console.error("loadDisordersFromXlsx error:", err);
    return null;
  }
}


