import Button from '../../components/atoms/button';
import Container from '../../components/atoms/container';
import Form from '../../components/molecules/form';
import SearchSwitcher from './search-switcher';

const options = [
  { label: 'Lập trình web', value: 'Chocolate' },
  { label: 'Lập trình mobile', value: 'Strawberry' },
  { label: 'Lập trình Frontend', value: 'Vanilla' },
  { label: 'Lập trình Backend', value: 'Vanilla2' },
  { label: 'Lập trình CMS', value: 'Vanilla3' },
  { label: 'Data analysis', value: 'Vanilla4' }
];

export default function SearchGroup() {
  return (
    <Container className="relative z-10">
      <SearchSwitcher />

      <div className="flex flex-wrap justify-center md:flex-nowrap md:gap-1">
        <Form.Select
          options={options}
          className="w-full  sm:w-1/2  md:w-[30rem]"
          placeholder="Lập trình..."
        />

        <Form.Input
          type={'tel'}
          className="w-full  sm:w-1/2 md:w-[20rem]"
          placeholder="Nhập vào mức lương mong muốn"
        />

        <Button className="justify-center w-full mt-4 bg-c-green-lighter md:mt-0 md:w-auto">
          Ok
        </Button>
      </div>
    </Container>
  );
}
