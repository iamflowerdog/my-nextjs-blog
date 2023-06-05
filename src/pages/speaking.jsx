import Head from 'next/head'

import CopyButton from '@/components/CopyBtn'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>课程 - 课程报名</title>
        <meta
          name="课程报名"
          content="赵纯想出品 - iOS开发课程（购前可微信zhaochunxiang1109咨询）"
        />
      </Head>
      <SimpleLayout
        title="Comming Soon..."
        intro="Thanks for your support."
      >
        <div className="space-y-20">
          <CopyButton content='yangyonghai9125' btntitle='  点击复制微信号咨询' />
          <SpeakingSection title="Web">
            <Appearance
              href="https://v.douyin.com/SaGYYxc/"
              title="杨勇海Web入门课程 - 从入门到放弃"
              description="不做标题党"
              event="最新录制 2022 - 持续更新"
              cta="课程报名"
            />
            <Appearance
              href="https://v.douyin.com/SaGYYxc/"
              title="杨勇海Web高级课程 - 从放弃到入门"
              description="就做标题党"
              event="最新录制 2022 - 持续更新"
              cta="去B站看视频"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
