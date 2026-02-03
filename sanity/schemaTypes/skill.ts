import { defineField, defineType } from 'sanity'

export const skill = defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Skill Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon (URL or Upload)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
