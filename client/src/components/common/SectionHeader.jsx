import React from "react";

export default function SectionHeader({
  badge = null,
  title,
  gradientText = null,
  description = null,
  alignment = "center",
}) {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`mb-16 ${alignmentClasses[alignment]}`}>
      {/* Badge */}
      {badge && (
        <div
          className={`inline-flex items-center gap-2 bg-brand-primary/10 px-4 py-2 rounded-full mb-6 ${
            alignment === "center" ? "justify-center" : ""
          }`}
        >
          {badge.icon &&
            React.cloneElement(badge.icon, {
              className: "w-5 h-5 text-brand-primary",
            })}
          <span className="text-brand-primary font-semibold text-sm">
            {badge.text}
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
        {title}
        {gradientText && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {gradientText}
            </span>
          </>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
