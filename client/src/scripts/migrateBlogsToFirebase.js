import { blogs } from '../data/blogs.js';
import { createBlog } from '../lib/blogService.js';

/**
 * Migration script to move existing blogs from static data to Firebase
 * Run this once to populate your Firestore database with existing blog data
 */

export async function migrateBlogsToFirebase() {
    console.log('Starting blog migration to Firebase...');
    console.log(`Found ${blogs.length} blogs to migrate`);

    const results = {
        success: 0,
        failed: 0,
        errors: []
    };

    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        try {
            console.log(`Migrating blog ${i + 1}/${blogs.length}: "${blog.title}"`);

            const blogData = {
                title: blog.title,
                slug: blog.slug,
                excerpt: blog.excerpt,
                article: blog.article,
                author: blog.author,
                image: blog.image,
                date: blog.date
            };

            await createBlog(blogData);
            results.success++;
            console.log(`✓ Successfully migrated: "${blog.title}"`);

        } catch (error) {
            console.error(`✗ Failed to migrate: "${blog.title}"`, error);
            results.failed++;
            results.errors.push({
                title: blog.title,
                error: error.message
            });
        }
    }

    console.log('\n=== Migration Results ===');
    console.log(`Successfully migrated: ${results.success} blogs`);
    console.log(`Failed to migrate: ${results.failed} blogs`);

    if (results.errors.length > 0) {
        console.log('\nErrors:');
        results.errors.forEach((error, index) => {
            console.log(`${index + 1}. ${error.title}: ${error.error}`);
        });
    }

    console.log('\nMigration completed!');
    return results;
}

// Export for use in other files or console
if (typeof window !== 'undefined') {
    window.migrateBlogsToFirebase = migrateBlogsToFirebase;
} 