import {defineField, defineType} from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: '제목',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: '슬러그',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brand',
      type: 'string',
      title: '브랜드명',
      description: '브랜드 이름 (예: Zespri, LOTTE WORLD)',
    }),
    defineField({
      name: 'number',
      type: 'string',
      title: '숫자',
      description: '카드에 표시될 숫자 (예: "11")',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: '설명',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subDescription',
      type: 'text',
      title: '부제목/부설명',
    }),
    defineField({
      name: 'thumbnailImage',
      type: 'image',
      title: '썸네일 이미지',
      description: 'ContentSection과 Work 페이지에서 표시될 썸네일 이미지',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: '메인 이미지',
      description: '브랜드 페이지 상세에서 표시될 메인 이미지',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'filters',
      type: 'array',
      title: '필터 태그',
      description: 'ContentSection의 필터와 매칭되는 태그들',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: '릴스 Reels', value: '릴스 Reels'},
              {title: '숏품 Short-form', value: '숏품 Short-form'},
              {title: '숏츠 Shorts', value: '숏츠 Shorts'},
              {title: '브이로그 Vlog', value: '브이로그 Vlog'},
              {title: '브랜디드 영상 Branded Film', value: '브랜디드 영상 Branded Film'},
              {title: '예능 Entertainment', value: '예능 Entertainment'},
              {title: '스케치 영상 Sketch Film', value: '스케치 영상 Sketch Film'},
              {title: '드라마 Drama', value: '드라마 Drama'},
              {title: '인터뷰 Interview', value: '인터뷰 Interview'},
              {title: '바이럴영상 Viral', value: '바이럴영상 Viral'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: '상세 내용',
      description: '브랜드 페이지 상세 내용',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: '발행일',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: '정렬 순서',
      description: '숫자가 작을수록 앞에 표시됩니다',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnailImage',
      subtitle: 'brand',
    },
  },
})

