export default defineEventHandler(async (event) => {
    const { req, res } = event;
    res.statusCode = 200;
    return [{
        locale:'vi-VN',data:[
        {title: "Cải Tạo Khu Nghỉ Dưỡng Anlam Saigon River tại Việt Nam", src: "/image/project/pages/pro1.jpg"},
        {title: "Kích Hoạt Lại Trung Tâm Ngành Khách Sạn", src: "/image/project/pages/pro2.jpg"},
        {title: "Các Khách Sạn tại Châu Mỹ Sẽ Cần 11,75 Tỷ USD cho Đồ Nội Thất và Trang Thiết Bị", src: "/image/project/pages/pro3.jpg"},
  ]
    },
    {
        locale:'en-US',data:[
        {title: "The Renovation Of Anlam Saigon River Resort in Vietnam", src: "/image/project/pages/pro1.jpg"},
        {title: "Reactivating The Hospitality Industry’s Locus", src: "/image/project/pages/pro2.jpg"},
        {title: "Hotels in The Americas Will Require $11.75 Billion in Furniture and Equipment", src: "/image/project/pages/pro3.jpg"},
        ]
    }
]
})