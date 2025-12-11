import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: '제목',
      initialValue: 'WHY WORK WITH PRAIN GLOBAL\'S CREATIVE DEPARTMENT',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: '부제목',
      initialValue: 'FULL CREATIVE EXECUTION - FROM A TO Z',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: '설명',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: '메인 이미지',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectHistory',
      type: 'array',
      title: '프로젝트 히스토리',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              type: 'string',
              title: '연도',
            },
            {
              name: 'projects',
              type: 'array',
              title: '프로젝트 목록',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'awards',
      type: 'array',
      title: '수상 내역',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'downloadButtonText',
      type: 'string',
      title: '다운로드 버튼 텍스트',
      initialValue: '회사소개서 다운로드',
    }),
    defineField({
      name: 'downloadFile',
      type: 'file',
      title: '다운로드 파일',
    }),
  ],
})

