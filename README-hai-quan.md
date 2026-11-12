# Khảo sát ứng dụng trí tuệ nhân tạo dành cho cán bộ Hải quan

## Phạm vi xuất bản đã được duyệt
Bổ sung thư mục `hai-quan/` vào trang đang có. Giữ nguyên khảo sát gốc ở `index.html`, cấu hình tên miền và kết nối dữ liệu của bản gốc.

Chương trình đào tạo kéo dài một hoặc hai ngày tùy đơn vị. Khảo sát giúp nhận diện mức độ sử dụng hiện tại và chọn bài thực hành, không cộng số khóa học theo danh sách trợ lý được gợi ý.

## Nội dung
- Thông tin người tham gia: họ tên, đơn vị và nhóm vị trí bắt buộc; chức vụ cụ thể, điện thoại, thư điện tử tùy chọn.
- Mục tiêu học tập: chọn từ một đến ba mục tiêu công việc, không đặt tên trợ lý làm đáp án.
- Hai mươi câu theo năm nhóm kỹ năng và hai tình huống về an toàn, kiểm chứng.
- Kết quả: mức độ từ một đến bốn, nhận xét an toàn riêng và tối đa ba trợ lý nên ưu tiên thực hành, có lý do và sản phẩm cụ thể.
- Viết đầy đủ thuật ngữ trong nội dung hiển thị; giữ tên riêng AI for Boss. “Mã phân loại hàng hóa” thay cho tên viết tắt của hệ thống phân loại hàng hóa quốc tế.

## Dữ liệu và giới hạn
Bản Hải quan chưa thu thập tập trung. Không gọi kết nối nhận dữ liệu của khảo sát cũ, không lưu thông tin vào bộ nhớ trình duyệt. Thông tin chỉ nằm trong trang đang mở và tệp kết quả do người học tự tải. Có thể in hoặc lưu bản kết quả; khi sửa câu trả lời hay thông tin, kết quả cũ bị khóa tải và in cho đến khi tính lại.

Cách phân loại là quy tắc tư vấn được đề xuất, chưa phải thang đo chuẩn hóa. Mức độ sử dụng cao không xác nhận được phép xử lý dữ liệu công vụ. Giảng viên cần xem bài thực hành để điều chỉnh hướng dẫn.

## Kiểm tra
Chạy `node --test tests/*.test.js`.

Chạy trang cục bộ bằng `python -m http.server 8765 --bind 127.0.0.1`, rồi mở `http://127.0.0.1:8765/hai-quan/`.

Các tệp dùng định danh và định dạng kỹ thuật nguyên bản để hoạt động đúng; yêu cầu viết đầy đủ áp dụng cho nội dung người tham gia đọc, không đổi tên hàm, thuộc tính hoặc định dạng tệp.

## Địa chỉ
Tên miền hiện được cấu hình cho kho là `congchuc.aiforboss.net`; bản Hải quan dùng đường dẫn `/hai-quan/`. Tình trạng truy cập thực tế được kiểm tra sau khi đưa mã lên nhánh triển khai.
