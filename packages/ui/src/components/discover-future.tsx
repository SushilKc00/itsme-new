import { SolutionCard, SolutionCardProps } from './solutions-hero';

export interface DiscoverFutureProps extends SolutionCardProps {}

export default function DiscoverFuture({ title, subtitle, image, content }: DiscoverFutureProps) {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SolutionCard title={title} subtitle={subtitle} content={content} image={image} />
    </div>
    // <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
    //   <div>
    //     <div className="relative w-full aspect-[4/5]">
    //       <Image src={image.src} alt={image.alt} fill className="object-cover" />
    //     </div>
    //   </div>
    //   <div>
    //     {title && <FormattedText>{title}</FormattedText>}

    //     <div>
    //       {list.map((item, index) => (
    //         <div key={index}>
    //           <FormattedText>{item.title}</FormattedText>
    //           <FormattedText>{item.subtitle}</FormattedText>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
