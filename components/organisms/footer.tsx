import Container from '../atoms/container';
import Text from '../atoms/text';

export default function Footer() {
  return (
    <footer className="py-4 bg-c-gray-lighter">
      <Container>
        <Text className="!text-c-white-lighter">
          Kết quả từ DealLuong chỉ mang tính chất tham khảo vì mức lương của mỗi
          người, mỗi vị trí phụ thuộc vào hàng trăm biến số và khó có thể đánh
          giá đều như nhau. Chúng tôi không chịu trách nhiệm dưới bất kỳ hình
          thức nào cho kết quả từ thuật toán Deal Lương trả ra. Tuy nhiên với
          các model học thuật, Toán học thông minh, xử lí nguồn dữ liệu lớn,
          Deal Lương hy vọng có thể là nguồn tham khảo quý báo cho mọi người sử
          dụng.
        </Text>

        <Text className="!text-c-white-lighter">
          Hãy đóng góp ý kiến cho chúng tôi qua: <br />
          Email: info@dealluong.com <br />
          Hotline/Zalo: 0944.55.0981
        </Text>
      </Container>
    </footer>
  );
}
