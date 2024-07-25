import FormattedText from './formattedText';
import { Card, CardProps } from './hero_products';

export interface OurBlogsProps {
  title?: string;
  subtitle?: string;
  desription?: string;
  items: CardProps[];
}

export default function OurBlogs({ title, subtitle, items }: OurBlogsProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-5">
          {title && (
            <FormattedText className="md:text-4xl text-3xl text-center text-secondary-color">
              {title}
            </FormattedText>
          )}

          {subtitle && (
            <FormattedText className="text-center text-tertiary-color">{subtitle}</FormattedText>
          )}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-4 mt-8">
          {items.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
