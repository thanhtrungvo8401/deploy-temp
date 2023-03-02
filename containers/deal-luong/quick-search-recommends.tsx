import { SwiperSlide } from 'swiper/react';
import Container from '../../components/atoms/container';
import MyImage from '../../components/atoms/image';
import ResponsiveSwiper from '../../components/libs/responsive-swiper';

function OneItem(props: any) {
  return (
    <SwiperSlide className="text-c-white">
      <div style={{ paddingBottom: '40%' }} className="relative pt-4 pl-4">
        <h5 className="">{props.content}</h5>

        <h5 className="text-c-green">{(Math.random() * 100).toFixed(1)} tr</h5>

        <MyImage
          alt="Chart"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_WcPpCnKvVh2H_5o-zowTYQZ4jApn7tGeg&usqp=CAU"
          className="!absolute top-0 left-0 -z-10 w-full h-full"
          style={{
            objectFit: 'fill'
          }}
        />
      </div>
    </SwiperSlide>
  );
}

const items = [
  { label: 'Lập trình web', value: 'Chocolate' },
  { label: 'Lập trình mobile', value: 'Strawberry' },
  { label: 'Lập trình Frontend', value: 'Vanilla' },
  { label: 'Lập trình Backend', value: 'Vanilla2' },
  { label: 'Lập trình CMS', value: 'Vanilla3' },
  { label: 'Data analysis', value: 'Vanilla4' }
];

export default function QuickSearchRecommends() {
  return (
    <Container className="mt-4">
      <ResponsiveSwiper>
        {items.map((i, idx) => {
          return (
            <SwiperSlide key={i.value}>
              <OneItem content={i.label} />
            </SwiperSlide>
          );
        })}
      </ResponsiveSwiper>
    </Container>
  );
}
