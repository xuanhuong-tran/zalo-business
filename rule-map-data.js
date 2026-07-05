window.ZBS_RULE_MAP = [
  {
    "section": "0 · PHÂN LOẠI MỤC ĐÍCH (TAG) — Phần I",
    "id": "TAG_001",
    "category": "Purpose / Tag",
    "name": "Template phải thuộc đúng 1 trong 3 nhóm mục đích: Tag 1 Transaction (Giao dịch), Tag 2 Customer Care (Chăm sóc KH), Tag 3 Promotion (Hậu mãi).",
    "description": "Có field tag hợp lệ; nội dung, CTA, ưu đãi, ngữ cảnh khớp tag đã chọn.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Kiểm tag ∈ {transaction, customer_care, promotion}; đối chiếu từ khóa nội dung với tag",
    "fixExample": "Không khai tag → gán tag hợp lệ",
    "rejectCase": ""
  },
  {
    "section": "0 · PHÂN LOẠI MỤC ĐÍCH (TAG) — Phần I",
    "id": "TAG_002",
    "category": "Purpose / Tag",
    "name": "Xung đột Tag — TH1: nội dung có BẤT KỲ yếu tố quảng cáo/ưu đãi/bán thêm (gây hiểu là hậu mãi) → BẮT BUỘC Tag 3. TH2: tổ hợp (Giao dịch + CSKH) → gán Tag 1. Mẫu Xác thực → Tag 1; Đánh giá dịch vụ → Tag 2.",
    "description": "Không gắn Tag 1/2 cho nội dung bản chất promotion.",
    "checkability": "Semi-auto",
    "priority": "P1",
    "autoCheck": "Phát hiện từ khóa hậu mãi (khuyến mãi, ưu đãi, giảm giá, voucher, mời mua, upsell, giới thiệu SP mới) trong mẫu khai Tag 1/2 → cảnh báo",
    "fixExample": "Mẫu Tag 1 có 'ưu đãi 50%' → cảnh báo chuyển Tag 3",
    "rejectCase": ""
  },
  {
    "section": "0 · PHÂN LOẠI MỤC ĐÍCH (TAG) — Phần I",
    "id": "AUD_001",
    "category": "Recipient eligibility",
    "name": "Chỉ gửi cho user ĐÃ phát sinh giao dịch/ngữ cảnh với DN. Ngoại lệ duy nhất: gửi OTP cho khách tạo tài khoản mới.",
    "description": "Template thể hiện được vì sao người nhận nhận tin.",
    "checkability": "Manual",
    "priority": "P0",
    "autoCheck": "Không kiểm được từ JSON — thuộc ngữ cảnh gửi",
    "fixExample": "",
    "rejectCase": ""
  },
  {
    "section": "1 · NGÔN NGỮ & CHẤT LƯỢNG NỘI DUNG — Phần II.1",
    "id": "TXT_001",
    "category": "Text quality",
    "name": "Không sai chính tả, không lỗi đánh máy (typo).",
    "description": "Nội dung đúng chính tả, không typo.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Từ điển tiếng Việt / LLM spell-check → mức CẢNH BÁO",
    "fixExample": "'KÍCH HỌA' → 'KÍCH HOẠT'",
    "rejectCase": "#589220"
  },
  {
    "section": "1 · NGÔN NGỮ & CHẤT LƯỢNG NỘI DUNG — Phần II.1",
    "id": "LANG_001",
    "category": "Language",
    "name": "Nội dung tiếng Việt BẮT BUỘC có dấu.",
    "description": "Tiếng Việt đầy đủ dấu.",
    "checkability": "Auto",
    "priority": "P1",
    "autoCheck": "Đo tỉ lệ ký tự có dấu; đoạn tiếng Việt dài không dấu → LỖI",
    "fixExample": "'Cam on quy khach' → 'Cảm ơn quý khách'",
    "rejectCase": ""
  },
  {
    "section": "1 · NGÔN NGỮ & CHẤT LƯỢNG NỘI DUNG — Phần II.1",
    "id": "LANG_002",
    "category": "Language",
    "name": "Dùng đồng nhất MỘT ngôn ngữ, không pha trộn nhiều ngôn ngữ (VD Anh–Việt).",
    "description": "Toàn bộ nội dung dùng 1 ngôn ngữ.",
    "checkability": "Auto partial",
    "priority": "P2",
    "autoCheck": "Phát hiện từ tiếng Anh xen câu tiếng Việt (loại trừ tên riêng) → cảnh báo",
    "fixExample": "'Đơn hàng đã confirmed' → thuần Việt",
    "rejectCase": ""
  },
  {
    "section": "1 · NGÔN NGỮ & CHẤT LƯỢNG NỘI DUNG — Phần II.1",
    "id": "TXT_002",
    "category": "Text quality",
    "name": "Không dùng icon, ký tự đặc biệt; hạn chế viết tắt (Tag 3: KHÔNG viết tắt).",
    "description": "Copy chuyên nghiệp, không icon, không viết tắt quá mức.",
    "checkability": "Auto partial",
    "priority": "P2",
    "autoCheck": "Regex emoji/ký tự đặc biệt (LỖI) + từ điển viết tắt (cảnh báo)",
    "fixExample": "'Ưu đãi 🎉' → bỏ emoji; 'KH nhận CTKM' → viết đầy đủ",
    "rejectCase": ""
  },
  {
    "section": "1 · NGÔN NGỮ & CHẤT LƯỢNG NỘI DUNG — Phần II.1",
    "id": "TXT_003",
    "category": "Text quality",
    "name": "Không dùng nội dung mê tín, lừa đảo, phóng đại, thần thánh hóa SP/DV.",
    "description": "Không claim quá đà, không nội dung mê tín/nhạy cảm.",
    "checkability": "Semi-auto",
    "priority": "P2",
    "autoCheck": "Blacklist từ khóa (tín chủ, thầy pháp, bùa ngãi, giải hạn, giàu phát...) + LLM ngữ cảnh",
    "fixExample": "'Mua vòng giải hạn' → mô tả trung tính",
    "rejectCase": ""
  },
  {
    "section": "1 · NGÔN NGỮ & CHẤT LƯỢNG NỘI DUNG — Phần II.1",
    "id": "TXT_004",
    "category": "Text quality",
    "name": "Nội dung phải rõ mục đích, văn phong chuyên nghiệp tương ứng Tag, thể hiện user đã giao dịch.",
    "description": "Người dùng hiểu DN gửi gì, vì sao, cần làm gì.",
    "checkability": "Manual",
    "priority": "P2",
    "autoCheck": "Cần người đánh giá ngữ cảnh",
    "fixExample": "",
    "rejectCase": ""
  },
  {
    "section": "2 · LINK & SỐ ĐIỆN THOẠI (VỊ TRÍ) — Phần II.1",
    "id": "CTA_001",
    "category": "CTA / Link / Phone",
    "name": "Link và số điện thoại/hotline KHÔNG được đặt trong body text — BẮT BUỘC nằm ở nút CTA.",
    "description": "Link/hotline chỉ xuất hiện trong nút CTA, không trong nội dung.",
    "checkability": "Auto",
    "priority": "P0",
    "autoCheck": "Regex URL + SĐT VN (0xx, +84, 1800/1900, số bàn) chạy trên TEXT (banner/map_info), loại trừ buttons",
    "fixExample": "SĐT '0901 550 112' trong nội dung → chuyển sang nút CTA gọi",
    "rejectCase": "#589221"
  },
  {
    "section": "3 · THAM SỐ (PARAMETERS) — Phần II.1",
    "id": "VAR_001",
    "category": "Parameters",
    "name": "Tham số đúng format: dạng <parameter_name>, không dấu, không khoảng trắng, không gạch nối, các từ ngăn bằng gạch dưới (_), bắt đầu '<' kết thúc '>'.",
    "description": "Mọi tham số khớp regex ^<[a-z0-9_]+>$.",
    "checkability": "Auto",
    "priority": "P0",
    "autoCheck": "Regex tên tham số",
    "fixExample": "'<mã KH>' → '<ma_kh>'",
    "rejectCase": ""
  },
  {
    "section": "3 · THAM SỐ (PARAMETERS) — Phần II.1",
    "id": "VAR_002",
    "category": "Parameters",
    "name": "Mỗi tham số cần có TIỀN TỐ/nhãn rõ nghĩa đứng trước trong nội dung.",
    "description": "VD: 'Mã đơn hàng <order_code>', không để trơ <order_code>.",
    "checkability": "Auto partial",
    "priority": "P0",
    "autoCheck": "Heuristic: kiểm cụm danh từ ngay trước mỗi <param> (từ điển tiền tố: mã, tên, ngày, số, hạng, đơn...); param đứng đầu câu/sau dấu câu không tiền tố → LỖI",
    "fixExample": "'<discount_discountDesc>' trơ → 'ưu đãi <discount_discountDesc>'",
    "rejectCase": "#588835, #587432"
  },
  {
    "section": "3 · THAM SỐ (PARAMETERS) — Phần II.1",
    "id": "VAR_003",
    "category": "Parameters",
    "name": "Không dùng xưng hô cố định 'anh/chị' — dùng biến giới tính hoặc từ trung tính.",
    "description": "Dùng 'Quý khách', 'Bạn', 'khách hàng', 'hội viên'... hoặc biến giới tính.",
    "checkability": "Auto",
    "priority": "P2",
    "autoCheck": "Regex 'anh/chị', 'a/c', 'Anh/Chị' trong text",
    "fixExample": "'Chào anh/chị' → 'Chào quý khách'",
    "rejectCase": ""
  },
  {
    "section": "4 · NÚT THAO TÁC (CTA) — Phần II.1",
    "id": "CTA_002",
    "category": "CTA / Link / Phone",
    "name": "CTA phải liên quan trực tiếp đến nội dung tin; nhắc app/kênh nào phải có CTA dẫn đến đó.",
    "description": "Nội dung nói thanh toán → CTA dẫn thanh toán; nói khảo sát → CTA dẫn khảo sát.",
    "checkability": "Semi-auto",
    "priority": "P1",
    "autoCheck": "Phát hiện từ 'app/website/mini app/thanh toán/khảo sát' → kiểm có button CTA tương ứng",
    "fixExample": "Nhắc 'tải app' không có nút → thêm CTA mở app",
    "rejectCase": ""
  },
  {
    "section": "4 · NÚT THAO TÁC (CTA) — Phần II.1",
    "id": "CTA_003",
    "category": "CTA / Link / Phone",
    "name": "Không dùng link rút gọn, link lỗi, link bị cảnh báo truy cập.",
    "description": "Link đầy đủ, truy cập được, không cảnh báo.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Blacklist domain rút gọn (bit.ly, tinyurl, s.id, onelink, goo.gl, cutt.ly) + HTTP check (cảnh báo)",
    "fixExample": "'bit.ly/xyz' → link đầy đủ",
    "rejectCase": ""
  },
  {
    "section": "4 · NÚT THAO TÁC (CTA) — Phần II.1",
    "id": "CTA_004",
    "category": "CTA / Link / Phone",
    "name": "Không dẫn đến group/group chat MXH (Zalo, Facebook, Telegram...), chat Messenger, Zalo cá nhân.",
    "description": "CTA dẫn đến OA, website, app, mini app, kênh chính thức.",
    "checkability": "Auto",
    "priority": "P0",
    "autoCheck": "Regex: zalo.me/g/, facebook.com/groups, t.me/, m.me/, chat.zalo.me...",
    "fixExample": "Link group chat → dẫn về web/OA chính thức",
    "rejectCase": "#588255"
  },
  {
    "section": "4 · NÚT THAO TÁC (CTA) — Phần II.1",
    "id": "CTA_005",
    "category": "CTA / Link / Phone",
    "name": "Brand name của domain CTA phải khớp tên OA (đồng nhất ngôn ngữ) hoặc có ủy quyền dùng tên miền.",
    "description": "Link khớp thương hiệu/OA hoặc có chứng minh quyền sử dụng.",
    "checkability": "Semi-auto",
    "priority": "P1",
    "autoCheck": "So khớp tên miền chính với tên OA (fuzzy) → cảnh báo cần chứng minh",
    "fixExample": "'shopABC.com' ≠ OA 'XYZ' → cung cấp ủy quyền",
    "rejectCase": ""
  },
  {
    "section": "4 · NÚT THAO TÁC (CTA) — Phần II.1",
    "id": "CTA_006",
    "category": "CTA / Link / Phone",
    "name": "Template KHÔNG phải Tag 3: CTA không chứa thông tin ưu đãi/gây hiểu lầm khuyến mãi, mời mua, mời đăng ký, mời tải app.",
    "description": "Nút CTA của Tag 1/2 không mang nội dung khuyến mãi.",
    "checkability": "Semi-auto",
    "priority": "P1",
    "autoCheck": "Từ khóa khuyến mãi trong text nút CTA khi tag≠3 → cảnh báo",
    "fixExample": "Nút 'Ưu đãi ngay' trong mẫu Tag 1 → đổi nội dung",
    "rejectCase": ""
  },
  {
    "section": "5 · LOẠI MẪU & THIẾT LẬP BẮT BUỘC — Phần II.1",
    "id": "TYPE_001",
    "category": "Template setup",
    "name": "Gửi mã giảm giá/voucher (mọi Tag) BẮT BUỘC dùng Voucher Template. Ngoại lệ: gửi >1 voucher/tin; hoặc không có mã cụ thể (phải nêu cách nhận + CTA đến app/kênh).",
    "description": "Có đúng loại template/component voucher.",
    "checkability": "Auto partial",
    "priority": "P0",
    "autoCheck": "Phát hiện từ khóa voucher/mã giảm giá/coupon + <voucher_code> trong template ≠ 'Voucher' → LỖI",
    "fixExample": "Có mã giảm giá nhưng dùng mẫu Tuỳ chỉnh → chuyển Voucher Template",
    "rejectCase": ""
  },
  {
    "section": "5 · LOẠI MẪU & THIẾT LẬP BẮT BUỘC — Phần II.1",
    "id": "TYPE_002",
    "category": "Template setup",
    "name": "Yêu cầu chuyển khoản/thanh toán đến STK ngân hàng BẮT BUỘC dùng Payment Request Template. Thanh toán qua kênh độc lập → được dùng Tuỳ chỉnh nhưng BẮT BUỘC CTA về kênh đó.",
    "description": "Có payment utility/block thanh toán phù hợp.",
    "checkability": "Auto partial",
    "priority": "P0",
    "autoCheck": "Từ khóa 'thanh toán/STK/chuyển khoản' + tham số amount/cost trong template ≠ 'Payment' → cảnh báo",
    "fixExample": "Yêu cầu chuyển khoản trong Tuỳ chỉnh → dùng Payment Template",
    "rejectCase": ""
  },
  {
    "section": "5 · LOẠI MẪU & THIẾT LẬP BẮT BUỘC — Phần II.1",
    "id": "TYPE_003",
    "category": "Template setup",
    "name": "Đánh giá/khảo sát chấm sao nên dùng đúng Rating component.",
    "description": "Có rating component/action hợp lệ.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Kiểm loại template khi nội dung yêu cầu chấm sao",
    "fixExample": "Yêu cầu đánh giá không có rating block → thêm Rating component",
    "rejectCase": ""
  },
  {
    "section": "5 · LOẠI MẪU & THIẾT LẬP BẮT BUỘC — Phần II.1",
    "id": "INTERNAL_001",
    "category": "Internal notification",
    "name": "Thông báo nội bộ cho nhân viên → nội dung phải ghi rõ 'Thông báo nội bộ'.",
    "description": "Có cụm 'Thông báo nội bộ' hoặc ngữ cảnh nhân viên rõ.",
    "checkability": "Auto partial",
    "priority": "P2",
    "autoCheck": "Từ khóa 'nhân viên/nội bộ' → kiểm chuỗi 'Thông báo nội bộ'",
    "fixExample": "Thiếu cụm → thêm 'Thông báo nội bộ'",
    "rejectCase": ""
  },
  {
    "section": "5 · LOẠI MẪU & THIẾT LẬP BẮT BUỘC — Phần II.1",
    "id": "BRAND_001",
    "category": "Brand ownership",
    "name": "Nhắc thương hiệu bên thứ ba → cần bằng chứng quan hệ/hợp tác.",
    "description": "Có tài liệu chứng minh hoặc thông tin công khai.",
    "checkability": "Manual",
    "priority": "P1",
    "autoCheck": "NER tên thương hiệu ≠ tên OA → cảnh báo cần chứng minh",
    "fixExample": "Nhắc 'đối tác XYZ' → cung cấp văn bản hợp tác",
    "rejectCase": ""
  },
  {
    "section": "6 · LOGO — Phần II.1",
    "id": "LOGO_001",
    "category": "Logo / Brand",
    "name": "Logo canh lề trái, rõ ràng, đúng thương hiệu; có bản light/dark tỉ lệ tương đương; màu không lỗi (lem, loang, bẹp); đúng chuẩn kích thước.",
    "description": "Logo không méo, không sai màu, hỗ trợ light/dark.",
    "checkability": "Auto partial",
    "priority": "P2",
    "autoCheck": "Kiểm JSON: tồn tại cả img.light & img.dark; đối chiếu data-width/height",
    "fixExample": "Thiếu dark mode → bổ sung logo dark",
    "rejectCase": ""
  },
  {
    "section": "6 · LOGO — Phần II.1",
    "id": "LOGO_002",
    "category": "Logo / Brand",
    "name": "Logo trùng tên OA hoặc có quyền sử dụng (GCN nhãn hiệu/ủy quyền/hợp đồng); logo không đính kèm SĐT/link (trừ thiết kế mặc định công khai).",
    "description": "Logo chỉ thể hiện thương hiệu hợp lệ, không SĐT/link.",
    "checkability": "Manual",
    "priority": "P2",
    "autoCheck": "Cần đối chiếu giấy tờ ngoài",
    "fixExample": "",
    "rejectCase": ""
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "ID_001",
    "category": "Identifier / Context",
    "name": "Template cần có định danh người nhận HOẶC ngữ cảnh liên quan (áp dụng cả 3 Tag).",
    "description": "Có tên KH, mã KH, mã đơn hàng, hợp đồng, lịch hẹn, giao dịch, tài khoản.",
    "checkability": "Auto partial",
    "priority": "P0",
    "autoCheck": "Từ điển tham số định danh + kiểm tồn tại",
    "fixExample": "Không có định danh nào → bổ sung tham số định danh",
    "rejectCase": ""
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "TRX_001",
    "category": "Transaction / All tags",
    "name": "BẮT BUỘC có tên khách hàng VÀ ít nhất 1 tham số định danh/xác định giao dịch.",
    "description": "Có <customer_name> + <order_code> (hoặc <customer_code>, <bill_id>, <order_date>...).",
    "checkability": "Auto partial",
    "priority": "P0",
    "autoCheck": "Từ điển 2 nhóm: 'tên' + 'định danh'; kiểm có ≥1 mỗi nhóm",
    "fixExample": "Thiếu cặp tên+mã → bổ sung <customer_name> + <order_code>",
    "rejectCase": "#589269, #588835"
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "TRX_002",
    "category": "Transaction / All tags",
    "name": "Bất khả kháng KHÔNG có tên KH → cần tổng cộng ít nhất 3 tham số định danh/xác định giao dịch phù hợp.",
    "description": "Nếu thiếu tên KH: có ≥3 tham số định danh.",
    "checkability": "Auto partial",
    "priority": "P0",
    "autoCheck": "Nhánh logic 2: nếu không có nhóm 'tên' → đếm tham số định danh ≥3",
    "fixExample": "Chỉ có <order_code> → thêm 2 tham số định danh nữa",
    "rejectCase": ""
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "TRX_003",
    "category": "Transaction",
    "name": "Nội dung nhắc thanh toán phải cho biết khoản đó liên quan giao dịch/dịch vụ nào.",
    "description": "Có mã hóa đơn, kỳ thanh toán, dịch vụ, số tiền, hạn thanh toán.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Từ khóa thanh toán → kiểm có tham số/ngữ cảnh giao dịch đi kèm",
    "fixExample": "'Vui lòng thanh toán' trơ → thêm <bill_id>, số tiền, hạn",
    "rejectCase": ""
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "CS_001",
    "category": "Customer Care",
    "name": "Tin CSKH phải có quan hệ/ngữ cảnh trước đó; khảo sát phải nêu rõ liên quan giao dịch/dịch vụ nào.",
    "description": "Có thông tin dịch vụ đã dùng, giao dịch, tài khoản, lịch sử.",
    "checkability": "Semi-auto",
    "priority": "P1",
    "autoCheck": "Kiểm tham số định danh + từ khóa ngữ cảnh dịch vụ",
    "fixExample": "Khảo sát chung chung → thêm ngữ cảnh đơn hàng/lần dùng DV",
    "rejectCase": ""
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "CS_002",
    "category": "Customer Care",
    "name": "Khảo sát kèm quà/voucher cần nêu điều kiện, giá trị, hạn dùng.",
    "description": "Nêu rõ quyền lợi và điều kiện áp dụng.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Từ khóa quà/voucher trong tin khảo sát → kiểm có điều kiện/HSD",
    "fixExample": "Tặng voucher không nêu HSD → bổ sung điều kiện + hạn",
    "rejectCase": ""
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "PROMO_001",
    "category": "Promotion",
    "name": "Tin khuyến mãi phải thể hiện rõ ưu đãi, điều kiện, thời hạn; BẮT BUỘC có tên khách hàng.",
    "description": "Có giá trị ưu đãi, điều kiện áp dụng, thời gian hiệu lực + tên KH.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Kiểm từ khóa thể lệ/điều kiện/HSD + tham số tên KH",
    "fixExample": "KM thiếu thể lệ/HSD → bổ sung điều kiện & thời hạn",
    "rejectCase": ""
  },
  {
    "section": "7 · YÊU CẦU THEO TAG (định danh giao dịch) — Phần II.2",
    "id": "PROMO_002",
    "category": "Promotion",
    "name": "Hotline trong promotion (Tag 3) phải là đầu số tổng đài 1800/1900, hoặc kèm chứng minh hotline chính thức.",
    "description": "CTA hotline dùng 1800/1900 hoặc có bằng chứng.",
    "checkability": "Semi-auto",
    "priority": "P1",
    "autoCheck": "Regex SĐT trong CTA: Tag 3 và không bắt đầu 1800/1900 → cảnh báo",
    "fixExample": "Tag 3 CTA '028...' → dùng 1900 hoặc kèm chứng minh",
    "rejectCase": ""
  },
  {
    "section": "8 · MỤC ĐÍCH ĐẶC BIỆT — Phần 3",
    "id": "SPECIAL_001",
    "category": "Birthday",
    "name": "Chúc mừng sinh nhật KH thân thiết: BẮT BUỘC có hình ảnh + quyền lợi hợp lệ (voucher/quà/loyalty). Không hỗ trợ chúc suông.",
    "description": "Có image + quà/voucher/benefit + thông tin loyalty công khai.",
    "checkability": "Semi-auto",
    "priority": "P2",
    "autoCheck": "Từ khóa 'sinh nhật' → kiểm có block ảnh + từ khóa quà/voucher",
    "fixExample": "Chúc sinh nhật không kèm quà → thêm ưu đãi + hình ảnh",
    "rejectCase": ""
  },
  {
    "section": "8 · MỤC ĐÍCH ĐẶC BIỆT — Phần 3",
    "id": "SPECIAL_002",
    "category": "Birthday",
    "name": "Sinh nhật có voucher/mã giảm giá → BẮT BUỘC dùng Voucher Template.",
    "description": "Dùng đúng template voucher khi có mã ưu đãi.",
    "checkability": "Auto partial",
    "priority": "P1",
    "autoCheck": "Sinh nhật + có mã giảm giá + template ≠ Voucher → LỖI",
    "fixExample": "Có mã giảm giá dùng mẫu thường → chuyển Voucher Template",
    "rejectCase": ""
  },
  {
    "section": "8 · MỤC ĐÍCH ĐẶC BIỆT — Phần 3",
    "id": "SPECIAL_003",
    "category": "Holiday / Tết",
    "name": "Chúc mừng Lễ Tết / hậu mãi mùa Lễ Tết: BẮT BUỘC hình ảnh + quà/voucher hợp lệ. Áp dụng theo 17 dịp lễ (xem sheet 'Lễ Tết'). KM độc lập trùng dịp lễ (có tên/thể lệ riêng) → không bắt buộc.",
    "description": "Có image + điều kiện/chương trình ưu đãi rõ ràng.",
    "checkability": "Semi-auto",
    "priority": "P2",
    "autoCheck": "Từ khóa tên dịp lễ → kiểm hình ảnh + quà tặng",
    "fixExample": "Chúc Tết không kèm ưu đãi → thêm voucher + hình ảnh",
    "rejectCase": ""
  },
  {
    "section": "9 · NGÀNH/SẢN PHẨM ĐẶC BIỆT — Phần 4",
    "id": "IND_001",
    "category": "Regulated / Beauty",
    "name": "Mỹ phẩm/thẩm mỹ viện (Tag 3): cung cấp thông tin chương trình & SP công khai; dịch vụ xâm lấn (phẫu thuật, căng chỉ, tiêm filler) → BẮT BUỘC giấy phép hành nghề + kinh doanh + quảng cáo.",
    "description": "Có giấy phép phù hợp nếu dịch vụ xâm lấn.",
    "checkability": "Manual",
    "priority": "P2",
    "autoCheck": "Cần đối chiếu giấy phép ngoài",
    "fixExample": "",
    "rejectCase": ""
  },
  {
    "section": "9 · NGÀNH/SẢN PHẨM ĐẶC BIỆT — Phần 4",
    "id": "IND_002",
    "category": "Alcohol",
    "name": "Rượu bia <5.5° (Tag 3): BẮT BUỘC có cụm 'Sản phẩm không dành cho người dưới 18 tuổi' + CTA về trang có kiểm soát tuổi (age gate). Rượu bia ≥5.5° → CẤM Tag 3.",
    "description": "Có câu cảnh báo tuổi + trang đích kiểm tuổi.",
    "checkability": "Semi-auto",
    "priority": "P2",
    "autoCheck": "Kiểm chuỗi bắt buộc khi ngành = rượu bia; nếu ≥5.5° + Tag 3 → LỖI cấm",
    "fixExample": "Thiếu cụm cảnh báo → bổ sung + CTA có popup xác nhận tuổi",
    "rejectCase": ""
  },
  {
    "section": "9 · NGÀNH/SẢN PHẨM ĐẶC BIỆT — Phần 4",
    "id": "IND_003",
    "category": "Functional food",
    "name": "Thực phẩm chức năng (Tag 3): BẮT BUỘC có cụm 'Sản phẩm không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh'; mô tả rõ công dụng; không dùng từ gây hiểu lầm là thuốc.",
    "description": "Có disclaimer chính xác + không claim như thuốc.",
    "checkability": "Auto partial",
    "priority": "P2",
    "autoCheck": "Kiểm chuỗi disclaimer bắt buộc + blacklist 'đặc trị/chữa khỏi/thay thế thuốc'",
    "fixExample": "Thiếu disclaimer → bổ sung đúng cụm quy định",
    "rejectCase": ""
  },
  {
    "section": "9 · NGÀNH/SẢN PHẨM ĐẶC BIỆT — Phần 4",
    "id": "IND_004",
    "category": "Medicine / Healthcare",
    "name": "Thuốc không kê đơn (Tag 3): BẮT BUỘC bộ 5 giấy tờ (ĐKKD, GXN ngành nghề, chứng nhận đại lý/HĐ mua bán, GCN đủ điều kiện KD dược, GXN thuốc không kê đơn). Thuốc bị khuyến cáo hạn chế → CẤM Tag 3.",
    "description": "Có đủ giấy phép và nội dung đúng phạm vi.",
    "checkability": "Manual",
    "priority": "P2",
    "autoCheck": "Cần đối chiếu giấy tờ ngoài + kiểm ngành cấm",
    "fixExample": "",
    "rejectCase": ""
  },
  {
    "section": "9 · NGÀNH/SẢN PHẨM ĐẶC BIỆT — Phần 4",
    "id": "IND_005",
    "category": "Prohibited goods",
    "name": "CẤM Tag 3 hoàn toàn với 22 nhóm sản phẩm/dịch vụ cấm (sinh lý, tang lễ, rượu ≥5.5°, thuốc lá, vũ khí, cờ bạc, đa cấp, tiền ảo, hàng giả, mê tín... — xem sheet 'Danh mục cấm Tag 3').",
    "description": "Không chứa nhóm SP/DV bị cấm.",
    "checkability": "Semi-auto",
    "priority": "P2",
    "autoCheck": "User khai ngành → tra bảng cấm; kết hợp keyword heuristic trong nội dung",
    "fixExample": "Ngành tang lễ + Tag 3 → không hỗ trợ, đổi mục đích",
    "rejectCase": ""
  },
  {
    "section": "9 · NGÀNH/SẢN PHẨM ĐẶC BIỆT — Phần 4",
    "id": "DOC_001",
    "category": "Proof / Documents",
    "name": "Ngành, thương hiệu, tài khoản, giấy phép đặc thù có thể cần tài liệu chứng minh khi đăng ký.",
    "description": "Có giấy phép/authorization/thông tin công khai hoặc note cho moderation.",
    "checkability": "Manual",
    "priority": "P1",
    "autoCheck": "Cần đối chiếu giấy tờ ngoài",
    "fixExample": "",
    "rejectCase": ""
  },
  {
    "section": "10 · THANH TOÁN (chủ tài khoản) — Phần II.1 (Khác)",
    "id": "PAY_001",
    "category": "Payment",
    "name": "Thông tin chuyển khoản (STK + chủ tài khoản) phải thuộc chính DN sở hữu OA.",
    "description": "Tên chủ tài khoản/ngân hàng khớp DN sở hữu OA.",
    "checkability": "Semi-auto",
    "priority": "P0",
    "autoCheck": "Đối chiếu tên chủ TK với tên DN/OA (bán tự động) — cần dữ liệu OA",
    "fixExample": "STK không thuộc DN → bổ sung ủy quyền thu hộ",
    "rejectCase": "#588636"
  },
  {
    "section": "10 · THANH TOÁN (chủ tài khoản) — Phần II.1 (Khác)",
    "id": "PAY_002",
    "category": "Payment",
    "name": "Không dùng tài khoản cá nhân/thu hộ nếu không có chứng minh (văn bản ủy quyền).",
    "description": "Có giấy ủy quyền/văn bản thể hiện quan hệ chủ TK với DN.",
    "checkability": "Manual",
    "priority": "P0",
    "autoCheck": "Cần giấy tờ ngoài",
    "fixExample": "",
    "rejectCase": ""
  }
];

window.ZBS_TAG3_PROHIBITED_CATEGORIES = [
  {
    "no": 1,
    "category": "Sản phẩm sinh lý, phẫu thuật thẩm mỹ sinh lý",
    "note": "Cấm toàn bộ Tag 3 — Phần 4b"
  },
  {
    "no": 2,
    "category": "Dịch vụ tang lễ & phục vụ tang lễ",
    "note": "Cấm toàn bộ Tag 3 — Phần 4c"
  },
  {
    "no": 3,
    "category": "Rượu bia, đồ uống có cồn từ 5.5 độ trở lên",
    "note": "Cấm toàn bộ Tag 3 — Phần 4e"
  },
  {
    "no": 4,
    "category": "Sữa thay thế sữa mẹ cho trẻ dưới 24 tháng; dinh dưỡng bổ sung cho trẻ dưới 6 tháng; bình bú, vú ngậm nhân tạo",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 5,
    "category": "Thuốc trái phép, thuốc theo toa, thuốc kích thích",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 6,
    "category": "Thuốc kê đơn; thuốc không kê đơn bị khuyến cáo hạn chế hoặc cần giám sát thầy thuốc",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 7,
    "category": "Sản phẩm kích dục, đồ chơi tình dục, sản phẩm tập trung khoái cảm tình dục",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 8,
    "category": "Sản phẩm hoặc dịch vụ người lớn",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 9,
    "category": "Thuốc lá và sản phẩm liên quan thuốc lá",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 10,
    "category": "Vũ khí, đạn dược, chất gây cháy nổ, hàng kích động bạo lực",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 11,
    "category": "Ấn bản phẩm như sách, báo, game, trang tin không có giấy phép phát hành",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 12,
    "category": "Thiết bị hoặc phần mềm ngụy trang ghi âm, ghi hình chưa được cấp phép",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 13,
    "category": "Sản phẩm liên quan thực vật hoặc động vật rừng nguy cấp, quý, hiếm",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 14,
    "category": "Kinh doanh vàng và ngoại hối chưa được Ngân hàng Nhà nước chấp thuận bằng văn bản",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 15,
    "category": "Tài chính gây nhầm lẫn hoặc lừa đảo như quyền chọn nhị phân, ICO tiền ảo, đấu giá kiểu thầu",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 16,
    "category": "Mô hình kiếm lời nhanh bất hợp lý như đa cấp hoặc hứa hẹn thù lao cao phi lý",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 17,
    "category": "Mô hình đầu tư hợp đồng kỳ nghỉ (timeshare)",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 18,
    "category": "Trò chơi may rủi như cá cược thể thao, bingo, poker, bet",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 19,
    "category": "Hàng giả, hàng nhái gây nhầm lẫn với nhãn hiệu nổi tiếng",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 20,
    "category": "Sản phẩm mê tín dị đoan",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 21,
    "category": "Sản phẩm hoặc dịch vụ cấm quảng cáo khác theo quy định cơ quan có thẩm quyền",
    "note": "Không hỗ trợ Tag 3"
  },
  {
    "no": 22,
    "category": "Sản phẩm khác ZBS nhận định không an toàn hoặc không phù hợp",
    "note": "Không hỗ trợ Tag 3"
  }
];

window.ZBS_HOLIDAY_OCCASIONS = [
  {
    "no": 1,
    "occasion": "Tết Dương Lịch",
    "time": "31/12 & 01/01",
    "calendarType": "Dương lịch"
  },
  {
    "no": 2,
    "occasion": "Tết Nguyên Đán",
    "time": "23/12–07/01 Âm lịch",
    "calendarType": "Âm lịch"
  },
  {
    "no": 3,
    "occasion": "Lễ Tình nhân",
    "time": "14/02",
    "calendarType": "Dương lịch"
  },
  {
    "no": 4,
    "occasion": "Quốc tế Phụ nữ",
    "time": "08/03",
    "calendarType": "Dương lịch"
  },
  {
    "no": 5,
    "occasion": "Giỗ Tổ Hùng Vương",
    "time": "29/04",
    "calendarType": "Dương lịch"
  },
  {
    "no": 6,
    "occasion": "Giải phóng miền Nam",
    "time": "30/04",
    "calendarType": "Dương lịch"
  },
  {
    "no": 7,
    "occasion": "Quốc tế Lao động",
    "time": "01/05",
    "calendarType": "Dương lịch"
  },
  {
    "no": 8,
    "occasion": "Ngày của Mẹ",
    "time": "CN thứ 2 tháng 5",
    "calendarType": "Ngày động"
  },
  {
    "no": 9,
    "occasion": "Quốc tế Thiếu nhi",
    "time": "01/06",
    "calendarType": "Dương lịch"
  },
  {
    "no": 10,
    "occasion": "Ngày của Cha",
    "time": "CN thứ 3 tháng 6",
    "calendarType": "Ngày động"
  },
  {
    "no": 11,
    "occasion": "Quốc khánh",
    "time": "02/09",
    "calendarType": "Dương lịch"
  },
  {
    "no": 12,
    "occasion": "Trung thu",
    "time": "15/8 Âm lịch",
    "calendarType": "Âm lịch"
  },
  {
    "no": 13,
    "occasion": "Phụ nữ Việt Nam",
    "time": "20/10",
    "calendarType": "Dương lịch"
  },
  {
    "no": 14,
    "occasion": "Halloween",
    "time": "31/10",
    "calendarType": "Dương lịch"
  },
  {
    "no": 15,
    "occasion": "Nhà giáo Việt Nam",
    "time": "20/11",
    "calendarType": "Dương lịch"
  },
  {
    "no": 16,
    "occasion": "Black Friday",
    "time": "Thứ 6 lần 4 tháng 11",
    "calendarType": "Ngày động"
  },
  {
    "no": 17,
    "occasion": "Giáng sinh",
    "time": "24–25/12",
    "calendarType": "Dương lịch"
  }
];
