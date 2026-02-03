import { defineField, defineType } from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'tech',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'link',
            title: 'Live Link',
            type: 'url',
        }),
        defineField({
            name: 'github',
            title: 'GitHub Link',
            type: 'url',
        }),
        defineField({
            name: 'color',
            title: 'Gradient Color (Optional)',
            type: 'string',
            description: 'e.g., from-blue-500 to-indigo-600',
        }),
    ],
})
