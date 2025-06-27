const translations = {
    vi: {
      greeting: "Xin chào, tôi là Diệu Anh.",
      "sub-greeting": "Sinh viên năm cuối ngành Khoa học Máy tính",
      "view-project": "Xem dự án",
      contact: "Liên hệ",
      "about-title": "Giới thiệu",
      "about-text": [
        "Họ tên: Nguyễn Thị Diệu Anh",
        "Ngày sinh: 19/04/2003",
        "Chuyên ngành: Khoa học Máy tính",
        "Trường: [Tên trường]",
        "Ngoại ngữ: Tiếng Anh",
        "Tôi là sinh viên năm cuối ngành Khoa học Máy tính.",
        "Tôi thích tìm hiểu và xây dựng các sản phẩm công nghệ đơn giản để giải quyết vấn đề thực tế.",
        "Hiện tại, tôi đang học HTML, CSS, JavaScript và React.",
        "Dù chưa từng làm việc tại một công ty hay tổ chức chính thức nào, nhưng tôi đã xây dựng các dự án cá nhân của bản thân bằng các ngôn ngữ đã học trên.",
        "Tôi vẫn đang tự học và phát triển mỗi ngày, luôn có mong muốn đóng góp kiến thức cho sự phát triển thực tế."
      ],
      "skill-title": "Kỹ năng & Công cụ",
      "project-title": "Dự án",
      "contact-title": "Liên hệ"
    },
    en: {
      greeting: "Hello, I’m Diệu Anh.",
      "sub-greeting": "Final-year Computer Science student",
      "view-project": "View Projects",
      contact: "Contact",
      "about-title": "About",
      "about-text": [
        "Name: Nguyễn Thị Diệu Anh",
        "Date of Birth: 19/04/2003",
        "Major: Computer Science",
        "University: [University Name]",
        "Foreign Language: English",
        "I’m a final-year student majoring in Computer Science.",
        "I enjoy exploring and building simple tech products to solve real-world problems.",
        "Currently, I’m learning HTML, CSS, JavaScript, and React.",
        "Although I haven't worked for any company or organization yet, I've built several personal projects using these technologies.",
        "I continue to self-learn and improve daily, aiming to contribute knowledge to real-world development."
      ],
      "skill-title": "Skills & Tools",
      "project-title": "Projects",
      "contact-title": "Contact"
    }
  };
  
  function switchLanguage(lang) {
    const t = translations[lang];
    document.getElementById("greeting").textContent = t.greeting;
    document.getElementById("sub-greeting").textContent = t["sub-greeting"];
    document.getElementById("view-project").textContent = t["view-project"];
    document.getElementById("contact").textContent = t.contact;
    document.getElementById("about-title").textContent = t["about-title"];
    document.getElementById("skill-title").textContent = t["skill-title"];
    document.getElementById("project-title").textContent = t["project-title"];
    document.getElementById("contact-title").textContent = t["contact-title"];
  
    const aboutTextDiv = document.getElementById("about-text");
    aboutTextDiv.innerHTML = "";
    t["about-text"].forEach(p => {
      const para = document.createElement("p");
      para.textContent = p;
      aboutTextDiv.appendChild(para);
    });
  
    // Ẩn menu khi đã chọn
    document.getElementById("lang-menu").style.display = "none";
  }
  
  function toggleLanguageMenu() {
    const menu = document.getElementById("lang-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  