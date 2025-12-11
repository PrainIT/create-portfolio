import {StringInputProps, useFormValue} from 'sanity'
import {Stack} from '@sanity/ui'

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

export function SubCategoryInput(props: StringInputProps) {
  const category = useFormValue(['category']) as string | undefined
  const options = category ? subCategories[category] || [] : []

  // 카테고리가 없으면 기본 StringInput 사용
  if (!category) {
    return props.renderDefault(props)
  }

  // 카테고리가 있으면 필터링된 옵션으로 렌더링
  // schemaType을 새로 만들어서 options를 덮어쓰기
  const modifiedSchemaType = {
    ...props.schemaType,
    options: {
      ...(props.schemaType.options || {}),
      list: options,
    },
  }

  return (
    <Stack space={3}>
      {props.renderDefault({
        ...props,
        schemaType: modifiedSchemaType,
      })}
    </Stack>
  )
}
