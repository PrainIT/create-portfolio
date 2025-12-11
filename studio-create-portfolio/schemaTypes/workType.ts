import {defineField, defineType} from 'sanity'
import {SubCategoryInput} from '../components/SubCategoryInput'

// 서브 카테고리 옵션 정의
const getSubCategoryOptions = (category: string | undefined) => {
  const subCategories: Record<string, Array<{title: string; value: string}>> = {
    video: [
      {title: '브랜디드 영상', value: 'branded-video'},
      {title: '캠페인 영상', value: 'campaign-video'},
      {title: '숏폼', value: 'short-form'},
      {title: '웹예능', value: 'web-entertainment'},
      {title: '스케치 영상', value: 'sketch-video'},
      {title: '드라마', value: 'drama'},
      {title: '인터뷰 영상', value: 'interview-video'},
      {title: '모션그래픽', value: 'motion-graphics'},
      {title: '뮤직비디오', value: 'music-video'},
      {title: 'LIVE', value: 'live'},
    ],
    design: [
      {title: 'SNS 콘텐츠', value: 'sns-content'},
      {title: '브랜딩', value: 'branding'},
      {title: '인포그래픽', value: 'infographic'},
      {title: '포스터', value: 'poster'},
      {title: '배너', value: 'banner'},
      {title: '카드뉴스', value: 'card-news'},
      {title: '키비주얼', value: 'key-visual'},
      {title: '인쇄물', value: 'print'},
      {title: '상세페이지', value: 'detail-page'},
      {title: '패키지', value: 'package'},
    ],
    photo: [
      {title: '제품', value: 'product'},
      {title: '인물', value: 'portrait'},
      {title: '스케치', value: 'sketch'},
    ],
    ai: [],
  }

  return category && subCategories[category] ? subCategories[category] : []
}

export const workType = defineType({
  name: 'work',
  title: 'Work',
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
      name: 'image',
      type: 'image',
      title: '이미지',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: '태그',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: '카테고리',
      options: {
        list: [
          {title: '영상 콘텐츠', value: 'video'},
          {title: '디자인 콘텐츠', value: 'design'},
          {title: '사진 콘텐츠', value: 'photo'},
          {title: 'AI 콘텐츠', value: 'ai'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'subCategory',
      type: 'string',
      title: '서브 카테고리',
      components: {
        input: SubCategoryInput,
      },
      hidden: ({parent}) => !parent?.category,
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: '설명',
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
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category',
    },
  },
})
