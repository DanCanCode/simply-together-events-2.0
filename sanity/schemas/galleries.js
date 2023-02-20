import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Galleries',
  type: 'document',
  title: 'Galleries',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    }),
    defineField({
      name: 'heading',
      type: 'image',
      title: 'Heading',
    }),
    defineField({
      name: 'cover',
      type: 'image',
      title: 'Cover',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'image',
        },
      ],
    }),
  ],
})
