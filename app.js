const fallbackSamples = [
  {
    id: "589242",
    type: "Tuỳ chỉnh",
    status: "ENABLE",
    reason: "",
    raw: `
      "root": {"sections":[
      {"banner":{"title":{"text":string"ĐẶT HẸN THÀNH CÔNG"}}},
      {"banner":{"title":{"text":string"Toyota Bến Thành cảm ơn Quý khách <customer_name> đã đặt hẹn. Vui lòng kiểm tra thông tin, nếu sai sót hoặc thay đổi, Quý khách liên hệ Hotline để được hỗ trợ:"}}},
      {"map_info":{"items":[
        {"key":{"title":{"text":string"Biển số xe"}},"value":{"title":{"text":string"<car_id>"}}},
        {"key":{"title":{"text":string"Giờ hẹn"}},"value":{"title":{"text":string"<time>"}}},
        {"key":{"title":{"text":string"Ngày hẹn"}},"value":{"title":{"text":string"<date>"}}},
        {"key":{"title":{"text":string"Nơi hẹn"}},"value":{"title":{"text":string"<address>"}}},
        {"key":{"title":{"text":string"Nội dung hẹn"}},"value":{"title":{"text":string"<service_name>"}}}
      ]}},
      {"buttons":{"items":[{"text":string"Hotline","click":{"action":string"action.open.phone","data":string"{phoneCode:1800558807}"}}]}}
      ]}`
  },
  {
    id: "589269",
    type: "Tuỳ chỉnh",
    status: "REJECT",
    reason: "Vui lòng bổ sung số lượng tham số định danh / tham số xác định giao dịch yêu cầu hoặc sử dụng nội dung để thể hiện được phát sinh giao dịch.",
    raw: `
      "root":{"sections":[
      {"banner":{"title":{"text":string"Nam An xin chào Quý khách <name> - Mã khách hàng <id>,"}}},
      {"banner":{"title":{"text":string"Nam An lắng nghe bạn từng chi tiết!"}}},
      {"banner":{"title":{"text":string"Ý kiến của Quý khách chính là chìa khóa để chúng tôi cải thiện dịch vụ."}}},
      {"banner":{"title":{"text":string"Quý khách vui lòng chia sẻ cảm nhận của mình để giúp chúng tôi cải thiện dịch vụ tốt hơn. Xin cảm ơn!"}}},
      {"buttons":{"items":[{"text":string"Khảo sát ngay","click":{"action":string"action.open.inapp","data":string"https://forms.office.com/r/pirJb83HK8"}}]}}
      ]}`
  },
  {
    id: "589221",
    type: "Tuỳ chỉnh",
    status: "REJECT",
    reason: "Link và số điện thoại/hotline bắt buộc phải đặt ở CTA (Nút thao tác) - Không được nằm ở phần nội dung template.",
    raw: `
      "root":{"sections":[
      {"banner":{"title":{"text":string"Xin chào <customer_name>,"}}},
      {"banner":{"title":{"text":string"Toyota Bình Dương thông báo Nhân viên Lê Anh Nhựt ngừng công tác từ ngày 01/06/2026."}}},
      {"banner":{"title":{"text":string"Mọi nhu cầu hỗ trợ tiếp theo, Quý Khách vui lòng liên hệ Toyota Bình Dương hoặc Thanh Xuân: 0901 550 112 để được phục vụ nhanh chóng."}}},
      {"map_info":{"items":[
        {"key":{"title":{"text":string"Tên khách hàng"}},"value":{"title":{"text":string"<customer_name>"}}},
        {"key":{"title":{"text":string"Số điện thoại"}},"value":{"title":{"text":string"<phone_number>"}}}
      ]}},
      {"buttons":{"items":[{"text":string"Quan tâm OA","click":{"action":string"action.open.inapp","data":string"https://oa.zalo.me/875284821968910157"}}]}}
      ]}`
  },
  {
    id: "589336",
    type: "Rating",
    status: "ENABLE",
    reason: "",
    raw: `
      "root":{"sections":[
      {"banner":{"title":{"text":string"ĐÁNH GIÁ TRẢI NGHIỆM DỊCH VỤ"}}},
      {"banner":{"title":{"text":string"Nha Khoa Đông Nam mời <name> đánh giá trải nghiệm điều trị tại <co_so_dieu_tri>."}}},
      {"map_info":{"items":[
        {"key":{"title":{"text":string"Mã hồ sơ"}},"value":{"title":{"text":string"<ma_ho_so>"}}},
        {"key":{"title":{"text":string"Ngày điều trị"}},"value":{"title":{"text":string"<ngay_dieu_tri_cuoi>"}}}
      ]}},
      {"rating":{"stars":[{"click":{"action":string"action.open.inapp","data":string"https://rating-zns.oa.zalo.me/rating/aeu4k6e6?star=1&requestId=<$zReqId>&requestTime=<$zReqTime>"}}]}}
      ]}`
  },
  {
    id: "586890",
    type: "Payment",
    status: "ENABLE",
    reason: "",
    raw: `
      "root":{"3rd_info":string"{more_utility:{type:payment,data:{amount:<transfer_amount>}}}","sections":[
      {"banner":{"title":{"text":string"Kính gửi Quý Khách Hàng <ten_khach_hang>"}}},
      {"map_info":{"items":[
        {"key":{"title":{"text":string"Số căn hộ"}},"value":{"title":{"text":string"<so_can_ho>"}}},
        {"key":{"title":{"text":string"Số tiền"}},"value":{"title":{"text":string"<so_tien> VNĐ"}}},
        {"key":{"title":{"text":string"Hạn thanh toán"}},"value":{"title":{"text":string"<ngay_thanh_toan>"}}}
      ]}},
      {"open_utility":{"type":string"payment"}},
      {"buttons":{"items":[{"text":string"Thanh toán ngay","click":{"action":string"PAYMENT"}},{"text":string"Hotline","click":{"action":string"action.open.phone","data":string"{phoneCode:19001234}"}}]}}
      ]}`
  },
  {
    id: "589220",
    type: "Tuỳ chỉnh",
    status: "REJECT",
    reason: 'Lỗi đánh máy "KÍCH HỌA".',
    raw: `
      "root":{"sections":[
      {"banner":{"title":{"text":string"KÍCH HỌA MÃ DỰ THƯỞNG THÀNH CÔNG"}}},
      {"banner":{"title":{"text":string"Cảm ơn ba mẹ <customer_name>. Mã dự thưởng đã được kích hoạt thành công."}}},
      {"map_info":{"items":[
        {"key":{"title":{"text":string"Mã đơn hàng"}},"value":{"title":{"text":string"<order_code>"}}},
        {"key":{"title":{"text":string"Trạng thái"}},"value":{"title":{"text":string"<payment_status>"}}}
      ]}},
      {"buttons":{"items":[{"text":string"Đến trang thông tin OA","click":{"action":string"action.open.inapp","data":string"https://oa.zalo.me/2906956084883563862"}}]}}
      ]}`
  },
  {
    id: "588835",
    type: "Tuỳ chỉnh",
    status: "REJECT",
    reason: "Nội dung cần có các cặp tham số định danh khách hàng gồm: TÊN KHÁCH HÀNG kết hợp với MÃ ĐƠN HÀNG/MÃ KHÁCH HÀNG/MÃ HỢP ĐỒNG. Lưu ý: bắt buộc có tiền tố làm rõ thông tin của từng tham số.",
    raw: `
      "root":{"sections":[
      {"banner":{"title":{"text":string"Kính gửi Quý khách <owner_hkd>,"}}},
      {"banner":{"title":{"text":string"Fastie gửi Quý khách bảng tổng hợp số liệu kinh doanh được ghi nhận của tháng <month_year>."}}},
      {"map_info":{"items":[
        {"key":{"title":{"text":string"Doanh thu tiền mặt"}},"value":{"title":{"text":string"<cash_rev>"}}},
        {"key":{"title":{"text":string"Doanh thu chuyển khoản"}},"value":{"title":{"text":string"<bank_rev>"}}},
        {"key":{"title":{"text":string"Tổng doanh thu"}},"value":{"title":{"text":string"<total_rev>"}}}
      ]}},
      {"buttons":{"items":[{"text":string"Quản lý doanh thu","click":{"action":string"action.open.inapp","data":string"https://zalo.me/s/992396493071053582/"}}]}}
      ]}`
  },
  {
    id: "588636",
    type: "Payment",
    status: "REJECT",
    reason: 'Thông tin chuyển khoản cần là thông tin của chính doanh nghiệp sở hữu OA; vui lòng điều chỉnh thông tin "đơn hàng" thành "mã đơn hàng" hoặc "đơn hàng có mã".',
    raw: `
      "root":{"3rd_info":string"{accountName:Cá nhân A, bankName:Techcombank, accountNumber:123456, more_utility:{type:payment}}","sections":[
      {"banner":{"title":{"text":string"Thanh Toán Đơn Hàng - V5"}}},
      {"banner":{"title":{"text":string"Chào <customer_name>, vui lòng thanh toán đơn hàng trước hạn."}}},
      {"map_info":{"items":[
        {"key":{"title":{"text":string"Đơn hàng"}},"value":{"title":{"text":string"<order_code>"}}},
        {"key":{"title":{"text":string"Trạng thái"}},"value":{"title":{"text":string"<payment_status>"}}},
        {"key":{"title":{"text":string"Hành trình"}},"value":{"title":{"text":string"<trip_info>"}}},
        {"key":{"title":{"text":string"Thời gian"}},"value":{"title":{"text":string"<date_info>"}}
      ]}},
      {"open_utility":{"type":string"payment"}},
      {"buttons":{"items":[{"text":string"Thanh toán ngay","click":{"action":string"PAYMENT"}},{"text":string"Quan tâm OA","click":{"action":string"action.open.inapp","data":string"https://oa.zalo.me/4377741633721725644"}}]}}
      ]}`
  },
  {
    id: "587432",
    type: "Voucher",
    status: "REJECT",
    reason: "Nội dung cần có cặp tham số định danh khách hàng; vui lòng bổ sung tiền tố cho biến '<discount_discountDesc>'.",
    raw: `
      "root":{"3rd_info":string"{more_utility:{type:voucher}}","sections":[
      {"banner":{"title":{"text":string"Chúc mừng sinh nhật <customer_name>"}}},
      {"banner":{"title":{"text":string"Lime Orange gửi lời chúc mừng sinh nhật tốt đẹp nhất đến <customer_name>."}}},
      {"open_utility":{"type":string"voucher","top":{"contents":{"items":[
        {"text":string"Giảm <discount_discountAmount>"},
        {"text":string"<discount_summary>"},
        {"text":string"<discount_discountDesc>"},
        {"text":string"HSD: <discount_startDate> - <discount_endDate>"}
      ]}}}},
      {"buttons":{"items":[{"text":string"Xem mã ưu đãi","click":{"action":string"VIEW_DETAILS"}},{"text":string"Mua sắm ngay","click":{"action":string"action.open.inapp","data":string"https://limeorange.vn/?utm_source=zalo"}}]}}
      ]}`
  },
  {
    id: "588255",
    type: "Tuỳ chỉnh",
    status: "REJECT",
    reason: "Không hỗ trợ nội dung/link điều hướng đến nhóm, group chat, chat Messenger, Zalo cá nhân.",
    raw: `
      "root":{"sections":[
      {"banner":{"title":{"text":string"LỢI ÍCH CỦA TIỆM VÀNG KHI ĐĂNG KÝ THÀNH VIÊN CỦA PJP"}}},
      {"banner":{"title":{"text":string"Xin chào Quý Khách Hàng <customer_name> - mã <customer_code>."}}},
      {"banner":{"title":{"text":string"- Cập nhật bảng giá vàng Sỉ của PJP khi có thay đổi."}}},
      {"banner":{"title":{"text":string"- Tư vấn, hướng dẫn các hoạt động bán hàng Online cho Tiệm Vàng."}}},
      {"buttons":{"items":[{"text":string"Bấm Vào Đây Để Tham Gia","click":{"action":string"action.open.inapp","data":string"https://post.oa.zalo.me/d?id=3786899142d4ab8af2c5&pageId=2364190025531152482"}},{"text":string"Quan tâm OA","click":{"action":string"action.open.inapp","data":string"https://oa.zalo.me/2364190025531152482"}}]}}
      ]}`
  }
];

const samples = window.ZBS_SAMPLES || fallbackSamples;

const fallbackRuleCatalog = [
  {
    id: "TAG_001",
    category: "Purpose / Tag",
    name: "Every template must map to one ZBS purpose tag",
    description: "Classify as Transaction, Customer Care, or Promotion; if any purpose looks promotional, treat as Promotion.",
    checkability: "Manual + heuristic",
    priority: "P1",
    source: "Section I; Section II.2"
  },
  {
    id: "AUD_001",
    category: "Recipient eligibility",
    name: "Recipient should have prior transaction context",
    description: "ZBS Template Message currently supports sending to users who have had a transaction with the business, except new-account authentication.",
    checkability: "Requires business data",
    priority: "P0",
    source: "Section I note; General requirements"
  },
  {
    id: "ID_001",
    category: "Identifiers / context",
    name: "Customer and business-context identifiers must be visible",
    description: "Templates should identify who the message is for and why the user is receiving it, such as customer name, order code, appointment date, contract ID, or account context.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "Transaction and Customer Care requirements"
  },
  {
    id: "TXT_001",
    category: "Text quality",
    name: "Correct spelling and Vietnamese language quality",
    description: "No typos; Vietnamese content should use proper accents; avoid mixed languages unless justified by context.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "General requirements"
  },
  {
    id: "TXT_002",
    category: "Text quality",
    name: "Clear purpose and professional wording",
    description: "Message must clearly explain context and purpose, use wording consistent with the selected tag, and avoid confusing or unprofessional copy.",
    checkability: "Manual + heuristic",
    priority: "P1",
    source: "General requirements"
  },
  {
    id: "SEM_001",
    category: "Semantic clarity",
    name: "Labels should describe the exact business object",
    description: "Wording should be specific enough for users and moderators to understand the business object, e.g. order code rather than a vague order reference.",
    checkability: "Keyword heuristic",
    priority: "P1",
    source: "General requirements; sample rejection patterns"
  },
  {
    id: "TXT_003",
    category: "Text quality",
    name: "No superstition, deception, or exaggerated claims",
    description: "Avoid wording that may imply superstition, fraud, spiritualized product claims, or misleading promises.",
    checkability: "Keyword heuristic",
    priority: "P2",
    source: "General requirements"
  },
  {
    id: "TXT_004",
    category: "Text quality",
    name: "Avoid abbreviations, icons, and special characters",
    description: "Limit abbreviations and do not use icons or special characters that reduce professionalism or clarity.",
    checkability: "Auto-check partial",
    priority: "P2",
    source: "General requirements"
  },
  {
    id: "LOGO_001",
    category: "Logo / brand",
    name: "Logo quality and ownership",
    description: "Logo should align left, support light/dark modes, avoid distortion, match OA/business ownership, and not include phone/link unless publicly part of the official logo.",
    checkability: "Manual / asset review",
    priority: "P2",
    source: "General requirements - Logo"
  },
  {
    id: "VAR_001",
    category: "Parameters",
    name: "Parameter format",
    description: "Parameters should start with < and end with >, avoid accents/spaces/hyphens, and use underscores between words.",
    checkability: "Auto-check",
    priority: "P0",
    source: "General requirements - Parameters"
  },
  {
    id: "VAR_002",
    category: "Parameters",
    name: "Parameter prefix clarity",
    description: "Each variable needs a clear prefix/label so users understand what the parameter means, e.g. Mã hội viên <member_code>.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "General requirements - Parameters"
  },
  {
    id: "VAR_003",
    category: "Parameters",
    name: "Neutral salutation",
    description: "Do not use fixed 'anh/chị'; use a gender variable or neutral words such as bạn, quý khách, khách hàng, hội viên.",
    checkability: "Keyword heuristic",
    priority: "P2",
    source: "General requirements - Parameters"
  },
  {
    id: "CTA_001",
    category: "CTA / buttons",
    name: "Phone numbers and links must be in CTA",
    description: "Links and phone/hotline numbers must be placed in action buttons, not in the message body.",
    checkability: "Auto-check",
    priority: "P0",
    source: "General requirements - CTA"
  },
  {
    id: "CTA_002",
    category: "CTA / buttons",
    name: "No short links, broken links, or unsafe links",
    description: "CTA links must be accessible, clear, and not shortened or flagged as unsafe.",
    checkability: "Auto-check partial",
    priority: "P1",
    source: "General requirements - CTA"
  },
  {
    id: "CTA_003",
    category: "CTA / buttons",
    name: "No group chat, Messenger, or personal chat links",
    description: "CTA must not route users to social network groups, group chats, Messenger chat, or personal Zalo accounts.",
    checkability: "Auto-check",
    priority: "P0",
    source: "General requirements - CTA / Other"
  },
  {
    id: "URL_001",
    category: "CTA / destinations",
    name: "Destination links must be supported and business-appropriate",
    description: "Do not route users to group chats, social chat threads, personal Zalo accounts, unsafe links, or destinations unrelated to the message purpose.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "General requirements - CTA / Other"
  },
  {
    id: "CTA_004",
    category: "CTA / buttons",
    name: "CTA must match the message context",
    description: "If the content mentions an app/channel/payment method, the CTA should lead to that relevant channel; non-promotional tags should avoid misleading promo links.",
    checkability: "Manual + heuristic",
    priority: "P1",
    source: "General requirements - CTA"
  },
  {
    id: "CTA_005",
    category: "CTA / buttons",
    name: "CTA domain ownership or authorization",
    description: "Partner/service CTA domain should match OA/business brand or have authorization from the owning business.",
    checkability: "Requires documents",
    priority: "P1",
    source: "General requirements - CTA"
  },
  {
    id: "VOUCHER_001",
    category: "Template setup",
    name: "Voucher purpose should use Voucher template",
    description: "Templates whose purpose is sending a discount code or voucher must use Voucher Template, except specific multi-voucher/no-code cases.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "General requirements - Setup"
  },
  {
    id: "TYPE_001",
    category: "Template type fit",
    name: "Template type must match the purpose and required component",
    description: "Payment, voucher, and rating purposes should use the corresponding supported template/component structure instead of being hidden in free text.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "General requirements - Setup; Purpose-specific rules"
  },
  {
    id: "LEGAL_001",
    category: "Legal / ownership",
    name: "Third-party brand references need proof",
    description: "If the template mentions another business/brand, provide cooperation proof or public information showing the relationship.",
    checkability: "Requires documents",
    priority: "P1",
    source: "General requirements - Other"
  },
  {
    id: "PAY_001",
    category: "Payment",
    name: "Bank transfer info must belong to OA-owning business",
    description: "Bank account number and account owner must belong to the business owning the OA; otherwise provide authorization/proof.",
    checkability: "Requires business data",
    priority: "P0",
    source: "General requirements - Other; Transaction payment"
  },
  {
    id: "INTERNAL_001",
    category: "Internal notification",
    name: "Internal staff notification must say 'Thông báo nội bộ'",
    description: "Templates intended for company employees must explicitly state that the message is an internal notification.",
    checkability: "Keyword heuristic",
    priority: "P2",
    source: "General requirements - Other"
  },
  {
    id: "TRX_001",
    category: "Transaction tag",
    name: "Transaction templates need customer name and transaction identifier",
    description: "Transaction purpose must relate to a specific transaction and include customer name plus at least one transaction identifier.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "Requirements by purpose - Transaction"
  },
  {
    id: "TRX_002",
    category: "Transaction tag",
    name: "Payment request should use Payment Request template when bank account collection is involved",
    description: "Requests for payment/fees to a bank account must use the Payment Request template; independent payment channels may use Custom with CTA to payment channel.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "Requirements by purpose - Transaction"
  },
  {
    id: "CS_001",
    category: "Customer Care tag",
    name: "Customer-care templates need customer and relationship context",
    description: "Customer Care templates require customer name and at least one identifier/transaction-context parameter; survey messages need clear prior transaction context.",
    checkability: "Auto-check partial",
    priority: "P0",
    source: "Requirements by purpose - Customer Care"
  },
  {
    id: "CS_002",
    category: "Customer Care tag",
    name: "Channel/website/app migration needs official public announcement",
    description: "Templates about switching channels/websites/apps need an official public announcement via CTA or moderation note.",
    checkability: "Requires documents",
    priority: "P2",
    source: "Requirements by purpose - Customer Care"
  },
  {
    id: "CS_003",
    category: "Customer Care tag",
    name: "Survey gift/voucher must include conditions",
    description: "If a survey offers gifts/vouchers, include value, application conditions, and expiry.",
    checkability: "Auto-check partial",
    priority: "P1",
    source: "Requirements by purpose - Customer Care"
  },
  {
    id: "CS_004",
    category: "Customer Care tag",
    name: "Birthday loyalty requires image and valid benefit context",
    description: "Birthday-loyalty messages require image plus gift/benefit/loyalty policy context; voucher cases should use Voucher template.",
    checkability: "Auto-check partial",
    priority: "P1",
    source: "Special purpose - Birthday"
  },
  {
    id: "PROMO_001",
    category: "Promotion tag",
    name: "Promotion templates must show clear promo rules",
    description: "Promotional/discount templates should include terms, application conditions, and expiry; must include customer name.",
    checkability: "Auto-check partial",
    priority: "P1",
    source: "Requirements by purpose - Promotion"
  },
  {
    id: "PROMO_002",
    category: "Promotion tag",
    name: "Promotion hotline must be a proper business hotline",
    description: "CTA phone number for Promotion should use 1800/1900 or provide proof that another number is an official business hotline.",
    checkability: "Auto-check partial",
    priority: "P1",
    source: "Requirements by purpose - Promotion"
  },
  {
    id: "PROMO_003",
    category: "Promotion tag",
    name: "Tag priority rules",
    description: "If any purpose can be interpreted as Promotion, classify as Promotion; Transaction + Customer Care together should be classified as Transaction.",
    checkability: "Manual + heuristic",
    priority: "P2",
    source: "Requirements by purpose - Tag notes"
  },
  {
    id: "SPECIAL_001",
    category: "Special purpose",
    name: "Holiday greeting promotions require image and valid offer",
    description: "Holiday/Tết promotion greetings require image plus valid gift/voucher/promotion information; standalone greetings without offer are not supported.",
    checkability: "Auto-check partial",
    priority: "P2",
    source: "Special purpose - Holiday/Tết"
  },
  {
    id: "IND_001",
    category: "Regulated industries",
    name: "Beauty / invasive services need licenses for Promotion",
    description: "Promotion templates for beauty/cosmetic and invasive services may require business, practice, and advertising licenses.",
    checkability: "Requires documents",
    priority: "P2",
    source: "Special industries"
  },
  {
    id: "IND_002",
    category: "Regulated industries",
    name: "Some sensitive sectors cannot use Promotion templates",
    description: "Certain sectors such as adult/sensitive physiological products, funeral services, strong alcohol, prescription drugs, weapons, gambling, and unsafe financial products are not supported for Promotion.",
    checkability: "Manual category review",
    priority: "P2",
    source: "Special industries"
  },
  {
    id: "IND_003",
    category: "Regulated industries",
    name: "Alcohol and functional food disclaimers",
    description: "Alcohol under applicable threshold needs age warning and age gate; functional food needs the required non-medicine disclaimer.",
    checkability: "Keyword heuristic",
    priority: "P2",
    source: "Special industries"
  }
];

const ruleCatalog = window.ZBS_RULE_MAP || fallbackRuleCatalog;
const prohibitedCategories = window.ZBS_TAG3_PROHIBITED_CATEGORIES || [];
const holidayOccasions = window.ZBS_HOLIDAY_OCCASIONS || [];

const els = {
  sampleSelect: document.querySelector("#sampleSelect"),
  templateId: document.querySelector("#templateId"),
  templateType: document.querySelector("#templateType"),
  jsonInput: document.querySelector("#jsonInput"),
  overallScore: document.querySelector("#overallScore"),
  overallStatus: document.querySelector("#overallStatus"),
  extractCount: document.querySelector("#extractCount"),
  previewContent: document.querySelector("#previewContent"),
  variablesList: document.querySelector("#variablesList"),
  actionsList: document.querySelector("#actionsList"),
  linksList: document.querySelector("#linksList"),
  issueCount: document.querySelector("#issueCount"),
  scoreText: document.querySelector("#scoreText"),
  issuesList: document.querySelector("#issuesList"),
  rulesGrid: document.querySelector("#rulesGrid"),
  ruleSummary: document.querySelector("#ruleSummary"),
  ruleSearch: document.querySelector("#ruleSearch"),
  ruleCategoryFilter: document.querySelector("#ruleCategoryFilter"),
  rulePriorityFilter: document.querySelector("#rulePriorityFilter"),
  prohibitedGrid: document.querySelector("#prohibitedGrid"),
  holidayGrid: document.querySelector("#holidayGrid"),
  ruleSubtabs: document.querySelectorAll(".rule-subtab"),
  allRulesView: document.querySelector("#allRulesView"),
  prohibitedRulesView: document.querySelector("#prohibitedRulesView"),
  holidayRulesView: document.querySelector("#holidayRulesView"),
  ruleFilterControls: document.querySelectorAll(".rule-filter-control"),
  navTabs: document.querySelectorAll(".nav-tab"),
  validatorPage: document.querySelector("#validatorPage"),
  rulesPage: document.querySelector("#rulesPage"),
  checksPage: document.querySelector("#checksPage"),
  assistantPage: document.querySelector("#assistantPage"),
  chatMessages: document.querySelector("#chatMessages"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  chatCounter: document.querySelector("#chatCounter"),
  sendChatButton: document.querySelector("#sendChatButton"),
  questionChips: document.querySelectorAll(".question-chip")
};

function stripHtml(value) {
  return value
    .replace(/<span[^>]*>/gi, "")
    .replace(/<\/span>/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function findPseudoStringEnd(raw, valueStart) {
  for (let index = valueStart; index < raw.length; index += 1) {
    if (raw[index] !== `"`) continue;

    const trailingSpace = raw.slice(index + 1).match(/^\s*/)?.[0] || "";
    const nextChar = raw[index + 1 + trailingSpace.length];
    if (/[\r\n]/.test(trailingSpace) || [",", "}", "]"].includes(nextChar)) {
      return index;
    }
  }
  return -1;
}

function extractPseudoTextValues(raw) {
  const marker = `"text":string"`;
  const values = [];
  let cursor = 0;

  while (cursor < raw.length) {
    const start = raw.indexOf(marker, cursor);
    if (start === -1) break;

    const valueStart = start + marker.length;
    const valueEnd = findPseudoStringEnd(raw, valueStart);
    if (valueEnd === -1) break;
    values.push(raw.slice(valueStart, valueEnd));
    cursor = valueEnd + 1;
  }

  return values.map(stripHtml);
}

function extractFromPseudoJson(raw) {
  const textMatches = extractPseudoTextValues(raw);
  const actionMatches = [...raw.matchAll(/"action"\s*:\s*string"([^"]*)"/g)].map((m) => m[1]);
  const dataMatches = [...raw.matchAll(/"data"\s*:\s*string"([^"]*)"/g)].map((m) => m[1]);
  const typeMatches = [...raw.matchAll(/"type"\s*:\s*string"([^"]*)"/g)].map((m) => m[1]);
  return {
    texts: uniq(textMatches),
    actions: uniq(actionMatches),
    data: uniq(dataMatches),
    componentTypes: uniq(typeMatches)
  };
}

function walkJson(value, bucket) {
  if (Array.isArray(value)) {
    value.forEach((item) => walkJson(item, bucket));
    return;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, child]) => {
      if (key === "text" && typeof child === "string") bucket.texts.push(stripHtml(child));
      if (key === "action" && typeof child === "string") bucket.actions.push(child);
      if (key === "data" && typeof child === "string") bucket.data.push(child);
      if (key === "type" && typeof child === "string") bucket.componentTypes.push(child);
      walkJson(child, bucket);
    });
  }
}

function extractTemplate(raw) {
  const bucket = { texts: [], actions: [], data: [], componentTypes: [] };
  let parseMode = "strict-json";
  let parsedRoot = null;
  let strictSections = null;
  try {
    const parsed = JSON.parse(raw);
    parsedRoot = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed.root : null;
    strictSections = Array.isArray(parsedRoot?.sections) ? parsedRoot.sections : null;
    walkJson(parsed, bucket);
  } catch {
    parseMode = /"root"\s*:/.test(raw) && /"sections"\s*:/.test(raw) && /:\s*(?:string|bool|int|NULL)/.test(raw)
      ? "pseudo-json"
      : "unreadable";
    const pseudo = extractFromPseudoJson(raw);
    Object.assign(bucket, pseudo);
  }

  const allVisible = bucket.texts.join(" ");
  const allData = bucket.data.join(" ");
  const variables = uniq([...raw.matchAll(/<([A-Za-z0-9_$][^>\s]*)>/g)].map((m) => `<${m[1]}>`))
    .filter((v) => !v.startsWith("</"));
  const phonesInText = uniq([...allVisible.matchAll(/(?:\+?84|0)(?:[\s.-]?\d){8,10}/g)].map((m) => m[0]));
  const urlsInText = uniq([...allVisible.matchAll(/https?:\/\/[^\s"<>]+/g)].map((m) => m[0]));
  const urlsInData = uniq([...allData.matchAll(/https?:\/\/[^\s"<>]+/g)].map((m) => m[0]));
  const cleanedParameterSource = raw.replace(/<\/?span\b[^>]*>/gi, "");
  const invalidParameterTokens = uniq([
    ...[...cleanedParameterSource.matchAll(/<([^<>\r\n]+)>/g)]
      .map((match) => match[0])
      .filter((token) => !/^<[A-Za-z_$][A-Za-z0-9_$]*>$/.test(token)),
    ...[...cleanedParameterSource.matchAll(/<[A-Za-z_$][A-Za-z0-9_$]*(?=[\s"',}:\]]|$)/g)].map((match) => match[0]),
    ...[...cleanedParameterSource.matchAll(/(?<![<$])\b[A-Za-z_$][A-Za-z0-9_$]*>/g)].map((match) => match[0])
  ]).slice(0, 8);
  const dataValues = uniq(bucket.data);
  const malformedUrlData = dataValues.filter((value) => {
    if (!/(?:https?:\/\/|www\.)/i.test(value)) return false;
    try {
      const candidate = value.startsWith("www.") ? `https://${value}` : value;
      const parsed = new URL(candidate);
      return !["http:", "https:"].includes(parsed.protocol) || !parsed.hostname.includes(".");
    } catch {
      return true;
    }
  });
  const phoneCodes = uniq([...dataValues.flatMap((value) => {
    try {
      const parsed = JSON.parse(value);
      if (parsed?.phoneCode != null) return [String(parsed.phoneCode)];
    } catch {
      // Pseudo-JSON button data is handled by the pattern below.
    }
    const match = value.match(/phoneCode["']?\s*:\s*["']?([^"'}\s,]+)/i);
    return match ? [match[1]] : [];
  }), ...[...raw.matchAll(/phoneCode[^\d]{0,12}(\+?\d{8,15})/gi)].map((match) => match[1])]);
  const hasRoot = parseMode === "strict-json" ? Boolean(parsedRoot) : /"root"\s*:/.test(raw);
  const hasSections = parseMode === "strict-json" ? Boolean(strictSections) : /"sections"\s*:\s*\[/.test(raw);
  const hasVisibleSections = parseMode === "strict-json"
    ? Boolean(strictSections?.length)
    : hasSections && (bucket.texts.length > 0 || bucket.actions.length > 0 || bucket.componentTypes.length > 0);

  return {
    texts: uniq(bucket.texts),
    actions: uniq(bucket.actions),
    data: uniq(bucket.data),
    componentTypes: uniq(bucket.componentTypes),
    variables,
    phonesInText,
    urlsInText,
    urlsInData,
    malformedUrlData,
    invalidParameterTokens,
    parseMode,
    hasRoot,
    hasSections,
    hasVisibleSections,
    hasButtonsComponent: /"buttons"\s*:/.test(raw),
    phoneCodes,
    raw
  };
}

function issue(ruleId, title, severity, why, fix, evidence = "", decisionType = "error") {
  return { ruleId, title, severity, why, fix, evidence, decisionType };
}

function hasAny(text, words) {
  const normalized = text.toLowerCase();
  return words.some((word) => normalized.includes(word.toLowerCase()));
}

function validateTemplate(model, templateType) {
  const issues = [];
  const visible = model.texts.join(" ");
  const raw = model.raw;
  const type = templateType.toLowerCase();

  const customerVars = model.variables.filter((v) =>
    /customer|khach|kh|name|ten|id|maKH|cust|owner/i.test(v)
  );
  const transactionVars = model.variables.filter((v) =>
    /order|don|contract|hop_dong|transaction|request|car|date|time|payment|invoice|ma_|code|ho_so/i.test(v)
  );
  const isSurveyLike = hasAny(visible, ["khảo sát", "chia sẻ cảm nhận", "cải thiện dịch vụ"]);
  const isPromotionLike = hasAny(type + " " + visible, ["voucher", "ưu đãi", "sinh nhật", "giảm"]);

  if (model.parseMode === "unreadable") {
    issues.push(issue(
      "INPUT_001",
      "Unreadable template payload",
      "high",
      "The input is neither valid JSON nor the supported ZBS pseudo-JSON format, so the template cannot be checked reliably.",
      "Paste the full registration payload and verify quotation marks, braces, arrays, and typed pseudo-JSON values."
    ));
    return issues;
  }

  if (!model.hasRoot) {
    issues.push(issue(
      "INPUT_001",
      "Missing root object",
      "high",
      "The registration payload needs a root object before its template fields can be interpreted.",
      "Wrap the template registration content in a root object."
    ));
  } else if (!model.hasSections) {
    issues.push(issue(
      "INPUT_001",
      "Missing sections array",
      "high",
      "The user-visible template components must be provided in root.sections[].",
      "Add a sections array under root and place the template components inside it."
    ));
  } else if (!model.hasVisibleSections) {
    issues.push(issue(
      "INPUT_001",
      "Empty sections array",
      "high",
      "The sections array does not contain any readable message component.",
      "Add at least one supported component such as banner, map_info, buttons, rating, or open_utility."
    ));
  }

  if (model.invalidParameterTokens.length > 0) {
    issues.push(issue(
      "VAR_001",
      "Malformed parameter syntax",
      "high",
      "Parameters need complete angle brackets and a name made from letters, numbers, underscores, or approved system symbols.",
      "Use a complete parameter such as <customer_name> and replace spaces, accents, or hyphens with underscores.",
      model.invalidParameterTokens.join(", ")
    ));
  }

  if (model.parseMode === "unreadable" || !model.hasRoot || !model.hasSections || !model.hasVisibleSections) {
    return issues;
  }

  if (customerVars.length === 0) {
    issues.push(issue(
      "ID_001",
      "Missing customer identifier",
      "high",
      "ZBS moderation often expects the message to identify the customer or recipient context.",
      "Add a clearly labeled customer identifier, such as Quý khách <customer_name> or Mã khách hàng <customer_id>.",
      "",
      "warning"
    ));
  }

  if (transactionVars.length === 0 && !isSurveyLike && !isPromotionLike) {
    issues.push(issue(
      "ID_001",
      "Missing transaction / business context identifier",
      "high",
      "The message may not show the transaction, order, appointment, contract, or account context clearly enough.",
      "Add a labeled transaction identifier such as Mã đơn hàng <order_code>, Mã hợp đồng <contract_id>, or Ngày giao dịch <date>.",
      "",
      "warning"
    ));
  }

  if (isSurveyLike && transactionVars.length === 0) {
    issues.push(issue(
      "ID_001",
      "Survey message lacks transaction context",
      "medium",
      "A survey/customer-care template still needs enough context to show why the business is contacting the user.",
      "Reference a recent service, purchase, visit, ticket, or transaction before asking for feedback.",
      "",
      "warning"
    ));
  }

  model.phonesInText.forEach((phone) => {
    issues.push(issue(
      "CTA_001",
      "Phone / hotline appears in message body",
      "high",
      "ZBS rules require phone numbers or hotlines to be placed in CTA buttons, not in body content.",
      "Move the phone number to a CTA button using action.open.phone, e.g. button text Hotline.",
      phone
    ));
  });

  model.urlsInText.forEach((url) => {
    issues.push(issue(
      "CTA_001",
      "URL appears in message body",
      "high",
      "Links should be placed in CTA buttons so users have a clear action and the message body stays clean.",
      "Move the URL into a CTA button and keep the body copy descriptive.",
      url
    ));
  });

  if (model.hasButtonsComponent && model.actions.length === 0) {
    issues.push(issue(
      "CTA_002",
      "Button is missing an action",
      "high",
      "A buttons component is present, but no executable action can be found.",
      "Add a supported click.action to every visible button."
    ));
  }

  if (model.actions.some((action) => /action\.open\.phone/i.test(action))) {
    const invalidPhoneCodes = model.phoneCodes.filter((code) => !/^\+?\d{8,15}$/.test(code));
    if (model.phoneCodes.length === 0 || invalidPhoneCodes.length > 0) {
      issues.push(issue(
        "CTA_002",
        "Phone CTA has invalid destination data",
        "high",
        "A phone action requires a valid phoneCode containing 8–15 digits.",
        "Provide click.data with a valid phoneCode, for example {\"phoneCode\":\"1800558807\"}.",
        invalidPhoneCodes.join(", ") || "phoneCode missing"
      ));
    }
  }

  if (model.actions.some((action) => /action\.open\.(?:inapp|url|web)/i.test(action)) && model.urlsInData.length === 0) {
    issues.push(issue(
      "CTA_002",
      "Link CTA is missing a valid URL",
      "high",
      "A navigation action needs a valid HTTP or HTTPS destination in its data field.",
      "Add the complete destination URL to click.data."
    ));
  }

  model.malformedUrlData.forEach((url) => {
    issues.push(issue(
      "CTA_002",
      "Malformed CTA URL",
      "high",
      "The CTA destination is not a valid HTTP or HTTPS URL.",
      "Use a complete URL such as https://business.example/path.",
      url
    ));
  });

  model.urlsInData.filter((url) => /(?:bit\.ly|tinyurl\.com|goo\.gl|t\.co)\//i.test(url)).forEach((url) => {
    issues.push(issue(
      "CTA_002",
      "Shortened CTA URL",
      "medium",
      "Short links hide the final destination and may not satisfy CTA transparency requirements.",
      "Replace the short link with the full official business URL.",
      url
    ));
  });

  if (/KÍCH HỌA|KICH HOA/i.test(visible)) {
    issues.push(issue(
      "TXT_001",
      'Likely typo: "KÍCH HỌA"',
      "medium",
      "The sample rejection explicitly flags this as a typo.",
      'Replace "KÍCH HỌA" with "KÍCH HOẠT".',
      "KÍCH HỌA",
      "warning"
    ));
  }

  const suspiciousBareVariables = model.variables.filter((variable) => {
    if (/^\<\$z/i.test(variable)) return false;
    const escaped = variable.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(^|[^\\p{L}\\w])${escaped}($|[^\\p{L}\\w])`, "u");
    const hasTextOccurrence = model.texts.some((text) => regex.test(text));
    const hasGoodPrefix = model.texts.some((text) => {
      const index = text.indexOf(variable);
      if (index < 0) return false;
      const before = text.slice(Math.max(0, index - 28), index).trim();
      return /(?:mã|tên|ngày|giờ|số|hạn|điều kiện|hạng|khách|hàng|đơn|hợp đồng|biển số|trạng thái|doanh thu|ưu đãi|hsd|giảm|căn hộ|đợt)$/i.test(before)
        || (before.match(/[\p{L}\p{N}]+/gu) || []).length >= 2;
    });
    const occurrenceIndex = model.texts.findIndex((text) => text.includes(variable));
    const previousText = occurrenceIndex > 0 ? model.texts[occurrenceIndex - 1].trim() : "";
    const nextText = occurrenceIndex >= 0 && occurrenceIndex < model.texts.length - 1
      ? model.texts[occurrenceIndex + 1].trim()
      : "";
    const hasAdjacentLabel = [previousText, nextText].some((text) =>
      text.length > 0 && text.length <= 80 && !/<[^>]+>/.test(text)
    );
    return hasTextOccurrence && !hasGoodPrefix && !hasAdjacentLabel;
  });

  if (suspiciousBareVariables.length > 0) {
    issues.push(issue(
      "VAR_001",
      "Variables may need clearer prefixes",
      "medium",
      "Moderation feedback asks for prefixes that explain what each parameter means.",
      `Add labels before variables, e.g. "Mã đơn hàng ${suspiciousBareVariables[0]}" or "Điều kiện ${suspiciousBareVariables[0]}".`,
      suspiciousBareVariables.slice(0, 4).join(", "),
      "warning"
    ));
  }

  const unsupportedLinks = model.urlsInData.filter((url) =>
    /messenger|telegram|facebook|zalo\.me\/g|chat|group|post\.oa\.zalo\.me/i.test(url)
  );
  unsupportedLinks.forEach((url) => {
    issues.push(issue(
      "URL_001",
      "Destination may be unsupported",
      "high",
      "The sample rejection says links to group/group chat/social chat destinations are not supported.",
      "Route users to an official OA, website, app page, or approved CTA destination instead.",
      url
    ));
  });

  if (type.includes("payment")) {
    const paymentSignals = raw.toLowerCase();
    if (!paymentSignals.includes("payment") && !paymentSignals.includes("open_utility")) {
      issues.push(issue(
        "TYPE_001",
        "Payment template missing payment utility block",
        "high",
        "Payment templates should expose payment-specific information through the approved payment utility structure.",
        "Add or verify open_utility / 3rd_info payment fields."
      ));
    }
    issues.push(issue(
      "PAY_001",
      "Payment account ownership verification",
      "high",
      "JSON can expose payment details, but it cannot prove that the receiving account belongs to the OA-owning business or has valid authorization.",
      "Verify account ownership or authorization documents outside this tool before submission.",
      /accountName:\s*Cá nhân|cá nhân|ủy quyền|thu hộ/i.test(raw)
        ? "Potential third-party or personal-account wording detected"
        : "Payment template requires external ownership evidence",
      "manual"
    ));
    if (hasAny(visible, ["Đơn hàng"]) && !hasAny(visible, ["Mã đơn hàng", "đơn hàng có mã"])) {
      issues.push(issue(
        "SEM_001",
        'Wording should clarify "mã đơn hàng"',
        "medium",
        'The sample rejection asks to change "đơn hàng" into "mã đơn hàng" or "đơn hàng có mã".',
        'Change the table key/body text from "Đơn hàng" to "Mã đơn hàng".',
        "",
        "warning"
      ));
    }
  }

  if (type.includes("voucher") && !hasAny(raw, ["voucher", "open_utility"])) {
    issues.push(issue(
      "TYPE_001",
      "Voucher template missing voucher utility block",
      "medium",
      "Voucher templates should carry voucher metadata such as code, value, condition, and expiry.",
      "Verify open_utility / 3rd_info voucher fields."
    ));
  }

  if (type.includes("rating") && !hasAny(raw, ["rating", "star"])) {
    issues.push(issue(
      "TYPE_001",
      "Rating template missing rating actions",
      "medium",
      "Rating templates should include star actions with trackable request parameters.",
      "Verify the rating component and requestId/requestTime parameters."
    ));
  }

  if (model.texts.length === 0 && model.hasSections) {
    issues.push(issue(
      "INPUT_001",
      "No user-visible message text",
      "high",
      "The payload has sections but no readable user-facing text was extracted.",
      "Add a visible title or body message to a supported text component."
    ));
  }

  const excessiveFormatting = model.texts.filter((text) => {
    const letters = text.match(/[A-Za-zÀ-ỹ]/g) || [];
    const uppercase = text.match(/[A-ZÀ-Ỹ]/g) || [];
    const uppercaseRatio = letters.length ? uppercase.length / letters.length : 0;
    return (text.length > 80 && letters.length > 25 && uppercaseRatio > 0.88)
      || /[!?.,]{4,}/.test(text)
      || /(.)\1{5,}/i.test(text);
  });
  if (excessiveFormatting.length > 0) {
    issues.push(issue(
      "TXT_001",
      "Potentially excessive text formatting",
      "low",
      "Long all-caps copy or repeated punctuation can reduce clarity and professionalism.",
      "Use sentence case and remove repeated punctuation or characters.",
      excessiveFormatting[0].slice(0, 120),
      "warning"
    ));
  }

  return issues;
}

function scoreFromIssues(issues) {
  const penalty = issues.reduce((total, item) => {
    if (item.decisionType === "manual") return total;
    const base = item.severity === "high" ? 22 : item.severity === "medium" ? 12 : 6;
    return total + (item.decisionType === "warning" ? Math.ceil(base / 2) : base);
  }, 0);
  return Math.max(0, 100 - penalty);
}

function statusFromScore(score, issues) {
  const errorCount = issues.filter((item) => item.decisionType === "error").length;
  const warningCount = issues.filter((item) => item.decisionType === "warning").length;
  const manualCount = issues.filter((item) => item.decisionType === "manual").length;
  if (issues.length === 0) return "Preflight checks passed";
  if (errorCount === 0 && warningCount === 0 && manualCount > 0) return "Manual verification required";
  if (errorCount === 0) return "Review warnings";
  if (score >= 55) return "Needs revision";
  return "High rejection risk";
}

function renderPreview(model, issues) {
  const riskyPhones = issues.filter((i) => i.ruleId === "CTA_001").map((i) => i.evidence);
  const prefixIssue = issues.some((i) => i.ruleId === "VAR_001");

  if (model.texts.length === 0) {
    els.previewContent.innerHTML = `<p class="empty-state">No visible text found. Paste a ZBS JSON or choose a sample.</p>`;
    return;
  }

  els.previewContent.innerHTML = model.texts.slice(0, 14).map((text, index) => {
    const isButtonLike = index > 0 && model.actions.length && /ngay|hotline|quan tâm|mua|xem|quản lý|khảo sát|trang/i.test(text);
    const hasRiskyPhone = riskyPhones.some((phone) => phone && text.includes(phone));
    const hasBareVar = prefixIssue && /<[^>]+>/.test(text) && !/(mã|tên|ngày|giờ|số|hạn|điều kiện|trạng thái|doanh thu|hsd)/i.test(text);
    const className = [
      "message-line",
      index === 0 ? "title" : "",
      isButtonLike ? "button" : "",
      hasRiskyPhone ? "highlight-red" : "",
      hasBareVar ? "highlight-amber" : ""
    ].filter(Boolean).join(" ");
    return `<div class="${className}">${escapeHtml(text)}</div>`;
  }).join("");
}

function renderIssues(issues) {
  els.issueCount.textContent = `${issues.length} finding${issues.length === 1 ? "" : "s"}`;
  if (issues.length === 0) {
    els.issuesList.innerHTML = `
      <div class="issue-card low">
        <div class="issue-top">
          <p class="issue-title">No major rule risks detected</p>
          <span class="severity low">info</span>
        </div>
        <p>This does not replace final ZBS moderation, but the template looks clean against the current preflight rules.</p>
        <div class="fix"><strong>Next step:</strong> Submit for moderation with final business context and sample values.</div>
      </div>
    `;
    return;
  }

  els.issuesList.innerHTML = issues.map((item) => `
    <article class="issue-card ${item.decisionType} ${item.severity}">
      <div class="issue-top">
        <p class="issue-title">${escapeHtml(item.title)}</p>
        <span class="decision-badge ${item.decisionType}">${item.decisionType}</span>
      </div>
      <p><strong>${item.ruleId}</strong> · Risk: ${escapeHtml(item.severity)}${item.evidence ? ` · Evidence: ${escapeHtml(item.evidence)}` : ""}</p>
      <p>${escapeHtml(item.why)}</p>
      <div class="fix"><strong>${item.decisionType === "manual" ? "Verification needed" : "Suggested fix"}:</strong> ${escapeHtml(item.fix)}</div>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderExtract(model) {
  const fieldCount = model.texts.length + model.variables.length + model.actions.length + model.urlsInData.length + model.phonesInText.length;
  els.extractCount.textContent = `${fieldCount} fields`;
  els.variablesList.textContent = model.variables.length ? model.variables.join(", ") : "--";
  els.actionsList.textContent = model.actions.length ? model.actions.join(", ") : "--";
  const linkPhone = [...model.urlsInData, ...model.urlsInText, ...model.phonesInText];
  els.linksList.textContent = linkPhone.length ? linkPhone.join(" · ") : "--";
}

function runValidation() {
  const raw = els.jsonInput.value.trim();
  const templateType = els.templateType.value.trim();
  if (!raw) {
    resetValidationState();
    return;
  }
  const model = extractTemplate(raw);
  const issues = validateTemplate(model, templateType);
  const score = scoreFromIssues(issues);
  const status = statusFromScore(score, issues);
  const errorCount = issues.filter((item) => item.decisionType === "error").length;
  const warningCount = issues.filter((item) => item.decisionType === "warning").length;
  const manualCount = issues.filter((item) => item.decisionType === "manual").length;

  if (els.overallScore) els.overallScore.textContent = score;
  if (els.overallStatus) els.overallStatus.textContent = status;
  els.scoreText.textContent = `${status}. ${errorCount} error${errorCount === 1 ? "" : "s"}, ${warningCount} warning${warningCount === 1 ? "" : "s"}, ${manualCount} manual check${manualCount === 1 ? "" : "s"}.`;

  renderExtract(model);
  renderPreview(model, issues);
  renderIssues(issues);
}

function resetValidationState() {
  if (els.overallScore) els.overallScore.textContent = "--";
  if (els.overallStatus) els.overallStatus.textContent = "Paste JSON to validate";
  els.extractCount.textContent = "0 fields";
  els.previewContent.innerHTML = `<p class="empty-state">No visible text found. Paste a ZBS JSON or choose a sample.</p>`;
  els.variablesList.textContent = "--";
  els.actionsList.textContent = "--";
  els.linksList.textContent = "--";
  els.issueCount.textContent = "0 issues";
  els.scoreText.textContent = "Paste JSON or choose a sample to review findings.";
  els.issuesList.innerHTML = `<p class="empty-state">Issues will appear here after validation.</p>`;
}

function rejectSummary(reason) {
  const text = String(reason || "").toLowerCase();
  if (!text) return "No rejection reason";
  if (text.includes("link") || text.includes("hotline") || text.includes("số điện thoại")) return "CTA placement";
  if (text.includes("tham số định danh") || text.includes("xác định giao dịch")) return "Missing identifier";
  if (text.includes("tiền tố")) return "Missing variable prefix";
  if (text.includes("đánh máy") || text.includes("kích họa")) return "Typo";
  if (text.includes("chuyển khoản") || text.includes("ủy quyền") || text.includes("thu hộ")) return "Payment ownership";
  if (text.includes("group") || text.includes("nhóm chat") || text.includes("zalo cá nhân")) return "Unsupported destination";
  return "Policy / content issue";
}

function formatSampleOption(sample) {
  const status = String(sample.status || "").toUpperCase();
  const type = sample.type || "Unknown type";
  return `Template ${sample.id} | ${type} | ${status}`;
}

function setMetadataMode(isSampleMode) {
  els.templateId.disabled = isSampleMode;
  els.templateType.disabled = isSampleMode;
  els.templateId.readOnly = isSampleMode;
  els.templateType.readOnly = isSampleMode;
}

function loadSample(id) {
  const sample = samples.find((item) => item.id === id);
  if (!sample) {
    setMetadataMode(false);
    els.templateId.value = "";
    els.templateType.value = "";
    els.jsonInput.value = "";
    resetValidationState();
    return;
  }
  setMetadataMode(true);
  els.templateId.value = sample.id;
  els.templateType.value = sample.type;
  els.jsonInput.value = sample.raw.trim();
  runValidation();
}

function scheduleValidation() {
  window.clearTimeout(scheduleValidation.timer);
  scheduleValidation.timer = window.setTimeout(runValidation, 180);
}

function setView(view) {
  els.validatorPage.classList.toggle("active", view === "validator");
  els.rulesPage.classList.toggle("active", view === "rules");
  els.checksPage.classList.toggle("active", view === "checks");
  els.assistantPage.classList.toggle("active", view === "assistant");
  els.navTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === view);
  });
}

function normalizeSearchText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function findRelevantRuleContext(question) {
  const stopWords = new Set(["the", "and", "for", "with", "this", "that", "what", "why", "how", "can", "toi", "co", "khong", "mot", "cac", "cho", "trong", "template"]);
  const terms = normalizeSearchText(question)
    .split(/[^a-z0-9_]+/)
    .filter((term) => term.length > 2 && !stopWords.has(term));

  return ruleCatalog
    .map((rule) => {
      const haystack = normalizeSearchText([rule.id, rule.category, rule.name, rule.description, rule.autoCheck, rule.fixExample].join(" "));
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0)
        + (rule.priority === "P0" ? 0.25 : 0);
      return { rule, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 7)
    .map(({ rule }) => ({
      id: rule.id,
      category: rule.category,
      rule: rule.name,
      evidence: rule.description,
      checkability: rule.checkability,
      priority: rule.priority,
      suggestedCheck: rule.autoCheck,
      fixExample: rule.fixExample
    }));
}

function appendChatMessage(role, content, citations = []) {
  const article = document.createElement("article");
  article.className = `chat-message ${role === "user" ? "user-message" : "assistant-message"}`;
  const citationHtml = citations.length
    ? `<div class="chat-citations">${citations.map((id) => `<span>${escapeHtml(id)}</span>`).join("")}</div>`
    : "";
  article.innerHTML = `
    <div class="message-avatar">${role === "user" ? "Y" : "Z"}</div>
    <div>
      <strong>${role === "user" ? "You" : "ZBS Rule Assistant"}</strong>
      <p>${escapeHtml(content).replace(/\n/g, "<br>")}</p>
      ${citationHtml}
    </div>`;
  els.chatMessages.appendChild(article);
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
  return article;
}

function buildLocalRuleAnswer(question, context) {
  const isVietnamese = /\b(toi|mau|tin|nhan|khach|hang|so|dien|thoai|duoc|khong|tai sao|lam sao)\b/i
    .test(normalizeSearchText(question));

  if (context.length === 0) {
    return {
      answer: isVietnamese
        ? "Tôi chưa tìm thấy rule đủ liên quan trong Rule Map. Hãy hỏi cụ thể hơn về Tag, định danh khách hàng/giao dịch, parameter, CTA, Payment, danh mục hạn chế hoặc Lễ/Tết. Trường hợp cần đánh giá ngữ cảnh vẫn phải được bộ phận kiểm duyệt xác nhận."
        : "I could not find a sufficiently relevant rule in the Rule Map. Try asking specifically about tags, customer or transaction identifiers, parameters, CTA, Payment, restricted categories, or Holiday/Tet requirements. Contextual cases still require moderation review.",
      ruleIds: []
    };
  }

  const matches = context.slice(0, 3);
  const ruleLines = matches.map((rule) => {
    const mode = rule.checkability || "Manual review";
    return `[${rule.id}] ${rule.rule} (${mode})`;
  });
  const fixes = matches
    .map((rule) => rule.fixExample)
    .filter(Boolean)
    .slice(0, 2);

  if (isVietnamese) {
    return {
      answer: `Dựa trên Rule Map, các rule liên quan nhất là:\n${ruleLines.join("\n")}\n\n${fixes.length ? `Gợi ý xử lý: ${fixes.join("; ")}.\n\n` : ""}Đây là hướng dẫn pre-check từ rule công khai, không phải cam kết template chắc chắn được duyệt.`,
      ruleIds: matches.map((rule) => rule.id)
    };
  }

  return {
    answer: `Based on the Rule Map, the most relevant requirements are:\n${ruleLines.join("\n")}\n\n${fixes.length ? `Suggested action: ${fixes.join("; ")}.\n\n` : ""}This is pre-submission guidance from the mapped public rules, not a guarantee of approval.`,
    ruleIds: matches.map((rule) => rule.id)
  };
}

async function askRuleAssistant(question) {
  const context = findRelevantRuleContext(question);
  appendChatMessage("user", question);
  const loading = appendChatMessage("assistant", "Checking the Rule Map...");
  loading.classList.add("loading-message");
  els.sendChatButton.disabled = true;
  els.chatInput.disabled = true;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, context })
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Assistant request failed.");
    loading.remove();
    appendChatMessage("assistant", payload.answer, payload.ruleIds || []);
  } catch (error) {
    loading.remove();
    const fallback = buildLocalRuleAnswer(question, context);
    appendChatMessage("assistant", fallback.answer, fallback.ruleIds);
  } finally {
    els.sendChatButton.disabled = false;
    els.chatInput.disabled = false;
    els.chatInput.focus();
  }
}

function submitChatQuestion() {
  const question = els.chatInput.value.trim();
  if (!question || els.sendChatButton.disabled) return;
  els.chatInput.value = "";
  els.chatCounter.textContent = "0 / 800";
  askRuleAssistant(question);
}

function setRuleView(view) {
  const isProhibited = view === "prohibited";
  const isHolidays = view === "holidays";
  els.allRulesView.classList.toggle("active", !isProhibited && !isHolidays);
  els.prohibitedRulesView.classList.toggle("active", isProhibited);
  els.holidayRulesView.classList.toggle("active", isHolidays);
  els.ruleFilterControls.forEach((control) => {
    control.classList.toggle("hidden", isProhibited || isHolidays);
  });
  els.ruleSubtabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.ruleView === view);
  });
}

function populateRuleFilters() {
  const categories = [...new Set(ruleCatalog.map((rule) => rule.category))].sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    els.ruleCategoryFilter.appendChild(option);
  });
}

function getFilteredRules() {
  const search = els.ruleSearch.value.trim().toLowerCase();
  const category = els.ruleCategoryFilter.value;
  const priority = els.rulePriorityFilter.value;
  return ruleCatalog.filter((rule) => {
    const haystack = [
      rule.id,
      rule.category,
      rule.name,
      rule.description,
      rule.checkability,
      rule.priority,
      rule.section,
      rule.source,
      rule.autoCheck,
      rule.fixExample,
      rule.rejectCase
    ].join(" ").toLowerCase();
    return (!search || haystack.includes(search))
      && (!category || rule.category === category)
      && (!priority || rule.priority === priority);
  });
}

function renderRuleSummary(rules) {
  const p0 = rules.filter((rule) => rule.priority === "P0").length;
  const p1 = rules.filter((rule) => rule.priority === "P1").length;
  const p2 = rules.filter((rule) => rule.priority === "P2").length;
  els.ruleSummary.innerHTML = [
    ["Total rules", rules.length],
    ["P0 must-check", p0],
    ["P1 important", p1],
    ["P2 manual/special", p2]
  ].map(([label, value]) => `
    <article class="rule-stat">
      <strong>${value}</strong>
      <span>${escapeHtml(label)}</span>
    </article>
  `).join("");
}

function renderRules() {
  const rules = getFilteredRules();
  renderRuleSummary(rules);
  if (rules.length === 0) {
    els.rulesGrid.innerHTML = `<p class="empty-state">No rules match the current filters.</p>`;
    return;
  }
  els.rulesGrid.innerHTML = rules.map((rule) => `
    <article class="rule-tile">
      <div class="rule-tile-head">
        <span class="rule-id">${escapeHtml(rule.id)}</span>
        <span class="priority-badge priority-${escapeHtml(rule.priority.toLowerCase())}">${escapeHtml(rule.priority)}</span>
      </div>
      <strong class="rule-category">${escapeHtml(rule.category)}</strong>
      <p class="rule-name">${escapeHtml(rule.name)}</p>
      <p>${escapeHtml(rule.description)}</p>
      <div class="rule-meta">
        <span>${escapeHtml(rule.checkability)}</span>
        <span>${escapeHtml(rule.section || rule.source || "Official ZBS rule")}</span>
      </div>
      ${rule.autoCheck ? `<div class="rule-detail"><strong>Auto-check</strong><p>${escapeHtml(rule.autoCheck)}</p></div>` : ""}
      ${rule.fixExample ? `<div class="rule-detail"><strong>Example / fix</strong><p>${escapeHtml(rule.fixExample)}</p></div>` : ""}
      ${rule.rejectCase ? `<div class="rule-detail reject-case"><strong>Sample reject</strong><p>${escapeHtml(rule.rejectCase)}</p></div>` : ""}
    </article>
  `).join("");
}

function renderProhibitedCategories() {
  if (!els.prohibitedGrid) return;
  const search = els.ruleSearch.value.trim().toLowerCase();
  const items = prohibitedCategories.filter((item) => {
    const haystack = `${item.no} ${item.category} ${item.note}`.toLowerCase();
    return !search || haystack.includes(search);
  });
  if (items.length === 0) {
    els.prohibitedGrid.innerHTML = `<p class="empty-state">No prohibited categories match the current search.</p>`;
    return;
  }
  els.prohibitedGrid.innerHTML = items.map((item) => `
    <article class="prohibited-card">
      <span>${item.no}</span>
      <div>
        <strong>${escapeHtml(item.category)}</strong>
        <p>${escapeHtml(item.note)}</p>
      </div>
    </article>
  `).join("");
}

function renderHolidayOccasions() {
  if (!els.holidayGrid) return;
  const search = els.ruleSearch.value.trim().toLowerCase();
  const items = holidayOccasions.filter((item) => {
    const haystack = `${item.no} ${item.occasion} ${item.time} ${item.calendarType}`.toLowerCase();
    return !search || haystack.includes(search);
  });
  if (items.length === 0) {
    els.holidayGrid.innerHTML = `<p class="empty-state">No Holiday/Tet occasions match the current search.</p>`;
    return;
  }
  els.holidayGrid.innerHTML = items.map((item) => `
    <article class="holiday-card">
      <span>${item.no}</span>
      <div>
        <strong>${escapeHtml(item.occasion)}</strong>
        <p>${escapeHtml(item.time)}</p>
      </div>
      <em>${escapeHtml(item.calendarType)}</em>
    </article>
  `).join("");
}

function init() {
  samples.forEach((sample) => {
    const option = document.createElement("option");
    option.value = sample.id;
    option.textContent = formatSampleOption(sample);
    els.sampleSelect.appendChild(option);
  });

  populateRuleFilters();
  renderRules();
  renderProhibitedCategories();
  renderHolidayOccasions();
  els.navTabs.forEach((tab) => {
    tab.addEventListener("click", () => setView(tab.dataset.view));
  });
  els.ruleSubtabs.forEach((tab) => {
    tab.addEventListener("click", () => setRuleView(tab.dataset.ruleView));
  });
  els.ruleSearch.addEventListener("input", () => {
    renderRules();
    renderProhibitedCategories();
    renderHolidayOccasions();
  });
  els.ruleCategoryFilter.addEventListener("change", renderRules);
  els.rulePriorityFilter.addEventListener("change", renderRules);
  els.chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitChatQuestion();
  });
  els.chatInput.addEventListener("input", () => {
    els.chatCounter.textContent = `${els.chatInput.value.length} / 800`;
  });
  els.chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitChatQuestion();
    }
  });
  els.questionChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      els.chatInput.value = chip.textContent.trim();
      els.chatCounter.textContent = `${els.chatInput.value.length} / 800`;
      els.chatInput.focus();
    });
  });
  els.sampleSelect.addEventListener("change", (event) => loadSample(event.target.value));
  els.templateId.addEventListener("input", scheduleValidation);
  els.templateType.addEventListener("input", scheduleValidation);
  els.jsonInput.addEventListener("input", scheduleValidation);

  els.sampleSelect.value = "589221";
  loadSample("589221");
}

init();
