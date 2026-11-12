'use strict';
const GROUPS = [
 {name:'Cách sử dụng và lựa chọn công việc cho trí tuệ nhân tạo',questions:[
  ['Hiện nay, anh/chị đang sử dụng trí tuệ nhân tạo để hỗ trợ công việc ở mức nào?',[
   'Tôi chưa sử dụng trí tuệ nhân tạo trong công việc hoặc mới đang tìm hiểu cách dùng.',
   'Tôi đang dùng trí tuệ nhân tạo cho một số việc đơn giản và còn cần hướng dẫn.',
   'Tôi đang tự dùng trí tuệ nhân tạo cho nhiều công việc và kiểm tra kết quả trước khi sử dụng.',
   'Tôi đang dùng trí tuệ nhân tạo theo các bước làm việc rõ ràng, có tiêu chí kiểm tra và ghi nhận hiệu quả để điều chỉnh cách làm.'
  ]],
  ['Hiện nay, anh/chị đang lựa chọn công cụ trí tuệ nhân tạo cho công việc như thế nào?',[
   'Tôi chưa rõ công cụ trí tuệ nhân tạo nào được đơn vị cho phép sử dụng.',
   'Tôi biết công cụ nào được phép sử dụng nhưng còn cần người khác giúp lựa chọn công cụ phù hợp.',
   'Tôi tự lựa chọn được công cụ phù hợp với công việc, loại dữ liệu và quyền truy cập được cấp.',
   'Tôi có khả năng lựa chọn, đánh giá rủi ro và giới hạn của từng công cụ trước khi sử dụng.'
  ]],
  ['Khi nhận một công việc, anh/chị đang phân chia nhiệm vụ giữa trí tuệ nhân tạo và cán bộ như thế nào?',[
   'Tôi chưa xác định được trí tuệ nhân tạo có thể hỗ trợ ở bước nào.',
   'Tôi nhận ra một số việc trí tuệ nhân tạo có thể hỗ trợ, như tóm tắt tài liệu công khai hoặc lập dàn ý.',
   'Tôi phân biệt được phần giao cho trí tuệ nhân tạo hỗ trợ với phần cán bộ phải tự xác minh và quyết định.',
   'Tôi xác định rõ tài liệu trí tuệ nhân tạo được sử dụng, nhiệm vụ cần thực hiện, kết quả cần trả lại và bước con người phải kiểm tra.'
  ]],
  ['Hiện nay, anh/chị đang đánh giá hiệu quả của việc sử dụng trí tuệ nhân tạo trong công việc như thế nào?',[
   'Tôi chưa có cách đánh giá hoặc chưa sử dụng trí tuệ nhân tạo trong công việc.',
   'Tôi chủ yếu dựa vào cảm nhận rằng làm nhanh hơn hoặc kết quả dễ đọc hơn.',
   'Tôi so sánh thời gian xử lý, độ chính xác và số lỗi phải sửa với cách làm không dùng trí tuệ nhân tạo.',
   'Tôi ghi lại các kết quả so sánh trên nhiều công việc để biết việc nào nên tiếp tục dùng trí tuệ nhân tạo và việc nào cần điều chỉnh.'
  ]]
 ]},
 {name:'Bảo vệ dữ liệu và kiểm tra căn cứ nghiệp vụ',questions:[
  ['Trước khi đưa tài liệu Hải quan vào công cụ trí tuệ nhân tạo, anh/chị đang làm gì để xác định tài liệu và công cụ đó có được phép sử dụng?',[
   'Tôi chưa rõ tài liệu nào được phép đưa vào công cụ trí tuệ nhân tạo.',
   'Tôi hỏi người phụ trách khi chưa rõ tài liệu hoặc công cụ đó có được phép sử dụng hay không.',
   'Tôi kiểm tra loại tài liệu, quyền sử dụng và công cụ được phê duyệt trước khi đưa tài liệu vào trí tuệ nhân tạo.',
   'Tôi thực hiện các bước kiểm tra trên theo danh sách cụ thể; trường hợp chưa rõ được dừng lại để xác nhận với người phụ trách.'
  ]],
  ['Hiện nay, anh/chị đang chọn và chuẩn bị tài liệu để thực hành với trí tuệ nhân tạo như thế nào?',[
   'Tôi chưa biết cách chuẩn bị tài liệu thực hành an toàn.',
   'Tôi dùng văn bản công khai hoặc biểu mẫu trống, không dùng hồ sơ nghiệp vụ thật để thực hành.',
   'Tôi còn biết tạo dữ liệu giả lập và kiểm tra tài liệu không chứa thông tin bị hạn chế sử dụng; không coi việc che tên là đủ để được phép tải hồ sơ lên trí tuệ nhân tạo.',
   'Tôi dùng danh sách kiểm tra quyền sử dụng, quyền chia sẻ và các chi tiết có thể nhận diện cá nhân, doanh nghiệp; tài liệu chưa rõ có được phép dùng thì tôi dừng lại để xác nhận.'
  ]],
  ['Với tài khoản trí tuệ nhân tạo được phép sử dụng, anh/chị đang bảo vệ tài khoản và quản lý người được xem tài liệu như thế nào?',[
   'Tôi chưa biết cách thiết lập hoặc chưa có tài khoản được phép sử dụng.',
   'Tôi bảo vệ mật khẩu và kiểm tra người được chia sẻ tài liệu nhưng còn cần hỗ trợ khi cài đặt.',
   'Tôi tự thiết lập xác thực bổ sung, quyền xem tài liệu và thời gian lưu dữ liệu theo hướng dẫn của đơn vị.',
   'Tôi còn kiểm tra lại quyền truy cập, thu hồi quyền chia sẻ không còn cần thiết và biết báo cho đầu mối phụ trách khi có dấu hiệu lộ tài khoản hoặc dữ liệu.'
  ]],
  ['Khi trí tuệ nhân tạo đưa ra thông tin về mã phân loại hàng hóa, trị giá, thuế, xuất xứ hoặc biện pháp xử lý, anh/chị đang kiểm tra căn cứ của thông tin đó như thế nào?',[
   'Tôi chưa biết cách kiểm tra hoặc chưa sử dụng trí tuệ nhân tạo cho những nội dung này.',
   'Tôi biết cần đối chiếu lại nhưng còn cần hỗ trợ tìm chứng từ, văn bản gốc và điều kiện áp dụng.',
   'Tôi đối chiếu chứng từ và văn bản gốc còn áp dụng; kiểm tra điều kiện áp dụng, thẩm quyền và không dùng câu trả lời của trí tuệ nhân tạo làm kết luận nghiệp vụ.',
   'Tôi còn ghi lại nguồn đối chiếu, nội dung chưa đủ căn cứ và chuyển người có thẩm quyền xác minh trước khi sử dụng.'
  ]]
 ]},
 {name:'Giao việc cho trí tuệ nhân tạo và kiểm tra bản thảo văn bản',questions:[
  ['Hiện nay, khi dùng trí tuệ nhân tạo để soạn bản thảo công văn, kế hoạch hoặc báo cáo, anh/chị đang viết yêu cầu như thế nào?',[
   'Tôi chưa biết viết yêu cầu hoặc mới chỉ nêu tên văn bản cần soạn.',
   'Tôi nêu mục đích, người đọc và các ý chính cần có trong văn bản.',
   'Tôi cung cấp thêm bối cảnh, tài liệu được phép sử dụng, mẫu kết quả mong muốn và yêu cầu trí tuệ nhân tạo ghi rõ thông tin còn thiếu, không tự điền số liệu.',
   'Tôi dùng các mẫu yêu cầu riêng cho từng loại văn bản, có tiêu chí kiểm tra kết quả và điều chỉnh mẫu khi phát hiện lỗi.'
  ]],
  ['Hiện nay, anh/chị đang làm gì để bản thảo do trí tuệ nhân tạo soạn phù hợp với biểu mẫu và cách hành văn của đơn vị?',[
   'Tôi chưa biết cách thực hiện hoặc chưa dùng trí tuệ nhân tạo để soạn văn bản.',
   'Tôi mô tả bằng lời bố cục và cách hành văn mong muốn.',
   'Tôi cung cấp biểu mẫu trống hoặc văn bản mẫu được phép sử dụng, rồi đối chiếu bản thảo trí tuệ nhân tạo trả lại với mẫu đó.',
   'Tôi sử dụng bộ mẫu được cập nhật theo phiên bản và hướng dẫn rõ trí tuệ nhân tạo phải giữ phần nào, thay phần nào, kiểm tra những gì.'
  ]],
  ['Khi bản thảo hoặc kết quả trí tuệ nhân tạo đưa ra chưa đạt yêu cầu, anh/chị đang yêu cầu trí tuệ nhân tạo chỉnh sửa như thế nào?',[
   'Tôi thường bỏ kết quả đó hoặc hỏi lại từ đầu mà chưa chỉ rõ phần chưa đạt.',
   'Tôi chỉ rõ đoạn hoặc nội dung cần sửa và yêu cầu trí tuệ nhân tạo chỉnh lại.',
   'Tôi nêu rõ nội dung chưa đạt, tiêu chí cần đáp ứng và tài liệu để đối chiếu; yêu cầu trí tuệ nhân tạo ghi rõ chỗ chưa đủ thông tin.',
   'Tôi còn cập nhật các yêu cầu chỉnh sửa vào mẫu giao việc, rồi thử lại trên tình huống khác để tránh lặp lại lỗi cũ.'
  ]],
  ['Trước khi trình duyệt văn bản có sử dụng nội dung do trí tuệ nhân tạo soạn, anh/chị đang kiểm tra bản thảo như thế nào?',[
   'Tôi chưa có cách kiểm tra cụ thể hoặc chưa dùng trí tuệ nhân tạo để soạn văn bản.',
   'Tôi đọc lại nội dung, sửa lỗi chính tả và cách trình bày.',
   'Tôi kiểm tra cả số liệu, căn cứ, thẩm quyền, thể thức và các nội dung chưa được xác minh.',
   'Tôi đối chiếu bản thảo với danh sách tiêu chí; nội dung còn nghi ngờ được xác minh từ nguồn gốc hoặc nhờ cán bộ chuyên môn kiểm tra, không chỉ dựa vào việc trí tuệ nhân tạo tự rà lại.'
  ]]
 ]},
 {name:'Tra cứu, xử lý bảng biểu và đọc tài liệu',questions:[
  ['Hiện nay, anh/chị đang sử dụng trí tuệ nhân tạo để tra cứu và đối chiếu quy định Hải quan như thế nào?',[
   'Tôi chưa dùng trí tuệ nhân tạo cho công việc này.',
   'Tôi nhờ trí tuệ nhân tạo tóm tắt văn bản công khai rồi đọc lại văn bản gốc để kiểm tra.',
   'Tôi cung cấp nguồn theo từng chuyên đề và kiểm tra điều khoản, hiệu lực, phạm vi áp dụng của kết quả trí tuệ nhân tạo trả lại.',
   'Tôi sử dụng bộ nguồn được cập nhật theo phiên bản; kết quả tra cứu có dẫn tới đúng đoạn trong văn bản gốc để đối chiếu.'
  ]],
  ['Hiện nay, anh/chị đang sử dụng trí tuệ nhân tạo để xử lý bảng dữ liệu trên Excel và tổng hợp số liệu báo cáo như thế nào?',[
   'Tôi chưa dùng trí tuệ nhân tạo để xử lý bảng dữ liệu hoặc tổng hợp số liệu.',
   'Tôi mô tả các cột và yêu cầu trí tuệ nhân tạo gợi ý công thức tính, lọc hoặc tìm dữ liệu; thực hành bằng dữ liệu giả lập.',
   'Tôi dùng trí tuệ nhân tạo hỗ trợ chuẩn hóa ngày tháng, lọc dòng trùng và tổng hợp số liệu trên dữ liệu được phép; tự đối chiếu công thức và tổng số trước khi dùng.',
   'Tôi sử dụng các bước xử lý có thể lặp lại; kiểm tra cả dòng thiếu, dòng trùng, sai định dạng và kết quả tổng hợp trước khi đưa số liệu vào báo cáo.'
  ]],
  ['Hiện nay, anh/chị đang sử dụng trí tuệ nhân tạo để đọc nội dung chứng từ, lấy chữ từ tài liệu quét hoặc dịch tài liệu ngoại ngữ như thế nào?',[
   'Tôi chưa dùng trí tuệ nhân tạo cho những công việc này.',
   'Tôi nhờ trí tuệ nhân tạo lấy chữ hoặc dịch nội dung trên tài liệu công khai, dữ liệu giả lập.',
   'Tôi đối chiếu kết quả với tài liệu gốc, kiểm tra số liệu, đơn vị tính và thuật ngữ; đánh dấu chỗ chưa chắc chắn.',
   'Tôi kiểm tra theo danh sách tiêu chí, ghi rõ nội dung lấy từ trang hoặc mục nào; phần chưa xác minh được chuyển cán bộ chuyên môn xem xét.'
  ]],
  ['Hiện nay, anh/chị đang sử dụng trí tuệ nhân tạo để giải thích thủ tục và soạn tài liệu hướng dẫn cho doanh nghiệp như thế nào?',[
   'Tôi chưa dùng trí tuệ nhân tạo cho công việc này.',
   'Tôi nhờ trí tuệ nhân tạo lập dàn ý hoặc viết bản thảo từ tài liệu công khai.',
   'Tôi dùng trí tuệ nhân tạo soạn câu trả lời, sơ đồ thủ tục hoặc bài trình bày có nguồn; kiểm tra nội dung trước khi sử dụng.',
   'Tôi sử dụng bộ câu hỏi thường gặp và tài liệu hướng dẫn được duyệt; cập nhật khi quy định thay đổi và sửa nội dung khi nhận được phản hồi.'
  ]]
 ]},
 {name:'Dùng lại hướng dẫn và quản lý việc sử dụng kết quả trí tuệ nhân tạo',questions:[
  ['Với các công việc lặp lại như lập danh sách kiểm tra hoặc tổng hợp báo cáo, hiện nay anh/chị đang lưu và dùng lại hướng dẫn cho trí tuệ nhân tạo như thế nào?',[
   'Tôi chưa lưu hướng dẫn; mỗi lần làm lại đều phải viết yêu cầu từ đầu.',
   'Tôi lưu các mẫu yêu cầu trong tệp ghi chép để sao chép và dùng lại.',
   'Tôi cài sẵn vai trò, tài liệu được phép dùng và mẫu kết quả cho một trợ lý trí tuệ nhân tạo, như trợ lý soạn công văn hoặc tổng hợp báo cáo.',
   'Tôi còn quản lý các phiên bản hướng dẫn, kiểm tra lại khi thay đổi tài liệu và ghi rõ những công việc trợ lý được phép thực hiện.'
  ]],
  ['Với trợ lý trí tuệ nhân tạo được cài sẵn hướng dẫn cho một công việc, hiện nay anh/chị đang kiểm tra xem trợ lý có làm đúng yêu cầu hay không bằng cách nào?',[
   'Tôi chưa sử dụng loại trợ lý này hoặc chưa biết cách kiểm tra.',
   'Tôi đưa vào một vài yêu cầu thông thường và đọc kết quả để xem trợ lý có làm đúng việc được giao hay không.',
   'Tôi kiểm tra thêm trường hợp thiếu tài liệu, nguồn mâu thuẫn hoặc yêu cầu ngoài công việc được giao; xem trợ lý có báo thiếu thông tin hoặc từ chối trả lời khi chưa đủ căn cứ hay không.',
   'Tôi dùng danh sách tình huống có tiêu chí đúng, sai; ghi lại lỗi và kiểm tra lại mỗi khi đổi tài liệu, hướng dẫn hoặc công cụ trí tuệ nhân tạo.'
  ]],
  ['Hiện nay, anh/chị đang kết hợp trí tuệ nhân tạo với biểu mẫu hoặc bảng tính để giảm thao tác lặp lại trong việc tổng hợp báo cáo, theo dõi hạn hoặc tạo bản thảo như thế nào?',[
   'Tôi chưa kết hợp trí tuệ nhân tạo với biểu mẫu hoặc bảng tính cho những công việc này.',
   'Tôi dùng trí tuệ nhân tạo hỗ trợ viết công thức hoặc tạo mẫu bảng để giảm việc nhập lại dữ liệu.',
   'Tôi đang thử chuyển dữ liệu giả lập từ biểu mẫu sang bảng tổng hợp, dùng trí tuệ nhân tạo hỗ trợ tổng hợp hoặc tạo bản thảo; có người kiểm tra trước khi ghi hoặc gửi kết quả.',
   'Tôi đang sử dụng các bước kết hợp trí tuệ nhân tạo với biểu mẫu hoặc bảng tính được đơn vị phê duyệt, có phân quyền, lưu lại thao tác, xử lý lỗi và khả năng dừng khi phát hiện sai sót.'
  ]],
  ['Khi sử dụng kết quả trí tuệ nhân tạo để lập báo cáo, trả lời doanh nghiệp hoặc cập nhật hồ sơ, anh/chị đang thực hiện việc kiểm tra và xin phê duyệt như thế nào?',[
   'Tôi chưa rõ ai cần kiểm tra, ai cần phê duyệt hoặc chưa dùng trí tuệ nhân tạo cho những việc này.',
   'Tôi tự đọc lại kết quả trí tuệ nhân tạo trước khi sử dụng nhưng chưa xác định rõ khi nào phải chuyển người khác kiểm tra hoặc phê duyệt.',
   'Tôi xác định rõ phần mình phải đối chiếu với tài liệu gốc và phần phải chuyển cán bộ chuyên môn hoặc người có thẩm quyền duyệt trước khi sử dụng.',
   'Tôi thực hiện theo các bước được đơn vị thống nhất: trí tuệ nhân tạo tạo bản thảo, cán bộ xác minh, người có thẩm quyền duyệt, sau đó mới gửi hoặc cập nhật hồ sơ; có ghi lại người kiểm tra và người phê duyệt.'
  ]]
 ]}
];
const QUESTION_HELP = {
 6:'Dữ liệu giả lập là dữ liệu tự tạo để thực hành, không lấy từ hồ sơ thật của cá nhân hoặc doanh nghiệp.',
 7:'Xác thực bổ sung là bước xác minh ngoài mật khẩu, chẳng hạn mã xác thực trên ứng dụng. Thực hiện theo phương thức được đơn vị cho phép.',
 14:'Ví dụ: viết công thức tính, tìm dữ liệu, lọc dòng trùng, chuẩn hóa ngày tháng và cộng số liệu từ nhiều bảng. Chỉ sử dụng dữ liệu được phép hoặc dữ liệu giả lập.',
 17:'Trợ lý trí tuệ nhân tạo ở đây là công cụ được cài sẵn hướng dẫn cho một công việc để không phải viết lại yêu cầu mỗi lần, chẳng hạn trợ lý soạn công văn.',
 18:'Tiếp nối câu 17: ví dụ với trợ lý soạn công văn, anh/chị kiểm tra văn bản có đúng mẫu, bám tài liệu được cung cấp và không tự điền thông tin còn thiếu. Chưa dùng trợ lý thì chọn mức 1; nếu loại công việc này không thuộc nhiệm vụ hiện tại, chọn “Không thuộc công việc hiện tại”.',
 20:'Câu này hỏi ai kiểm tra, ai phê duyệt và khi nào kết quả được phép gửi hoặc ghi vào hồ sơ. Câu 12 hỏi các nội dung anh/chị kiểm tra trong một bản thảo văn bản.'
};
const MODULES = {
 M0:{title:'An toàn dữ liệu và kiểm chứng kết quả trí tuệ nhân tạo',output:'Danh sách kiểm tra tài liệu được phép dùng, nguồn cần đối chiếu và bước con người phê duyệt.'},
 M1:{title:'Nền tảng trí tuệ nhân tạo và cách giao việc',output:'Bộ yêu cầu mẫu cho công việc thường ngày, thực hành bằng tài liệu công khai hoặc dữ liệu giả lập.'},
 M2:{goal:'Soạn thảo và rà soát văn bản',title:'Trợ lý soạn thảo và rà soát văn bản',output:'Một bản thảo công văn hoặc báo cáo kèm danh sách kiểm tra số liệu, căn cứ và thẩm quyền.'},
 M3:{goal:'Tra cứu và đối chiếu quy định Hải quan',title:'Trợ lý tra cứu quy định Hải quan',output:'Bảng đối chiếu quy định theo chuyên đề, có nguồn, phiên bản và nội dung cần xác minh.'},
 M4:{goal:'Xử lý bảng dữ liệu trên Excel và tổng hợp số liệu báo cáo',title:'Trợ lý xử lý bảng dữ liệu và tổng hợp báo cáo trên Excel',output:'Bảng tổng hợp từ dữ liệu giả lập, công thức được đối chiếu và phần nhận xét số liệu.'},
 M5:{goal:'Đọc, đối chiếu chứng từ và dịch tài liệu ngoại ngữ',title:'Trợ lý đọc, đối chiếu chứng từ và dịch tài liệu',output:'Bảng lấy thông tin hoặc đối chiếu chứng từ giả lập, ghi rõ sai khác và nội dung chưa thể xác minh.'},
 M6:{goal:'Giải thích thủ tục và soạn tài liệu hướng dẫn cho doanh nghiệp',title:'Trợ lý hướng dẫn thủ tục và hỗ trợ doanh nghiệp',output:'Bộ câu trả lời hoặc sơ đồ thủ tục từ nguồn công khai, có bước kiểm tra và duyệt trước khi sử dụng.'},
 M7:{goal:'Theo dõi công việc, tổng hợp tiến độ và nhắc hạn',title:'Trợ lý theo dõi công việc và nhắc hạn',output:'Bảng việc từ dữ liệu giả lập: việc cần làm, người phụ trách, hạn xử lý và nội dung cần xác nhận; không tự gửi nhắc việc hoặc kết nối hệ thống nghiệp vụ.'},
 M8:{goal:'Đọc nhanh báo cáo, xác định vấn đề cần xử lý và giao việc',title:'Trợ lý lãnh đạo: đọc báo cáo và giao việc',output:'Bản tóm tắt báo cáo, vấn đề cần làm rõ và bảng phân công công việc để lãnh đạo kiểm tra, điều chỉnh và phê duyệt.'}
};
const TASKS = {
 procedures:{label:'Thủ tục, kiểm tra và giám sát Hải quan',modules:['M3','M5']},
 tax:{label:'Phân loại, trị giá, xuất xứ và thuế',modules:['M3','M5']},
 risk:{label:'Quản lý rủi ro, phân tích và thống kê',modules:['M4','M3']},
 post:{label:'Kiểm tra sau thông quan',modules:['M5','M4','M3']},
 control:{label:'Kiểm soát, phòng chống buôn lậu và xử lý vi phạm',modules:['M3','M2']},
 support:{label:'Hỗ trợ doanh nghiệp, hướng dẫn thủ tục',modules:['M6','M3']},
 office:{label:'Tham mưu, tổng hợp, văn phòng và công tác nội bộ',modules:['M2','M4']},
 digital:{label:'Công nghệ thông tin, dữ liệu và chuyển đổi số',modules:['M7','M4']},
 other:{label:'Nhóm nhiệm vụ khác',modules:[]}
};
const CASES = [
 {id:'caseData',title:'Tình huống A. Anh/chị cần thực hành với trí tuệ nhân tạo nhưng bộ tài liệu đang có gồm tờ khai, chứng từ và thông tin doanh nghiệp chưa công khai. Anh/chị chọn cách xử lý nào?',options:[['raw','Đưa nguyên bộ lên tài khoản trí tuệ nhân tạo cá nhân để có kết quả đầy đủ.'],['mask','Che tên doanh nghiệp rồi tải lên, không cần kiểm tra thêm.'],['safe','Không tải lên trí tuệ nhân tạo công cộng; kiểm tra loại tài liệu và công cụ được phép sử dụng, dùng dữ liệu giả lập khi học.'],['unsure','Tôi chưa rõ cách xử lý.']],correct:'safe'},
 {id:'caseLaw',title:'Tình huống B. trí tuệ nhân tạo đang đề xuất mã phân loại hàng hóa và mức thuế khi chưa có đủ mô tả hàng hóa, nguồn trích dẫn cũng chưa được kiểm tra. Anh/chị chọn cách xử lý nào?',options:[['trust','Dùng ngay vì trí tuệ nhân tạo trình bày rõ ràng.'],['ask','Hỏi lại cùng trí tuệ nhân tạo xem có chắc chắn không rồi dùng.'],['verify','Chưa dùng làm kết luận; xác minh chứng từ, nguồn và điều kiện áp dụng, chuyển người có thẩm quyền xem xét.'],['unsure','Tôi chưa rõ cách xử lý.']],correct:'verify'}
];
if(typeof module!=='undefined')module.exports={GROUPS,MODULES,TASKS,CASES,QUESTION_HELP};
