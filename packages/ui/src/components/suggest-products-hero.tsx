import FormattedText from './formattedText';
import { Card, CardProps } from './hero_products';
import randomaizeArray from '../../../../apps/web/app/_lib/randomizeArray';

export interface SuggestProductsHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;

  items: CardProps[];
}

export default function SuggestProductsHero({ title, subtitle, items }: SuggestProductsHeroProps) {
  const randomArr = randomaizeArray(items);
  return (
    <section className="max-w-7xl mx-auto px-6">
      {title && <FormattedText className="md:text-4xl text-3xl font-medium">{title}</FormattedText>}
      {subtitle && <FormattedText className="mt-2">{subtitle}</FormattedText>}

      <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-4 mt-8">
        {randomArr.slice(0, 4).map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </section>
  );
}
