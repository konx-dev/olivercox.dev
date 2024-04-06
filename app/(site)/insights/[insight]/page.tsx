import ArrowLink from '@/components/atom/ArrowLink';
import RichText from '@/components/atom/RichText';
import PageBuilder from '@/components/pagebuilder/Pagebuilder';
import { getInsight } from '@/sanity/queries/insights';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { dateConvert } from '@/helpers';

type Props = {
  params: { insight: string };
};

export default async function Insight({ params }: Props) {
  const slug = params.insight;
  const insight = await getInsight(slug);

  if (!insight) {
    notFound();
  }

  return (
    <section className="container max-w-[1100px] px-4 my-16 lg:my-32">
      <div>
        <h1 className="text-heading-xxl text-center font-bold mb-5">{insight.name}</h1>
        <div className="text-heading-sm text-center font-medium text-red-500 dark:text-black-500">
          {insight.description}
        </div>
        <div className="flex flex-row my-4 lg:my-8 justify-center items-center gap-2">
          <span className="text-heading-sm font-medium dark:text-white-700">
            {dateConvert(insight.publishedDate, 'do MMMM, yyyy')}
          </span>
          {/* <span className="rounded-full overflow-hidden">
            <Image src={insight.authorImage} alt={insight.author.alt} width={30} height={30} />
          </span> */}
        </div>
        <hr />
      </div>

      {insight.introduction && (
        <div>
          <div className="py-4 lg:py-8 px-4 font-medium text-center">
            <RichText ctx={insight.introduction} />
          </div>
          <hr />
        </div>
      )}

      <div className="container max-w-[800px]">
        <PageBuilder ctx={insight.pageBuilder} />
        <div className="mt-8 lg:mt-16">
          <hr />
          <div className="mt-4 flex justify-between">
            <ArrowLink target={'/'} callToAction={'Return Home'} reversed />
            <ArrowLink target={'/insights'} callToAction={'All Insights'} />
          </div>
        </div>
      </div>
    </section>
  );
}
