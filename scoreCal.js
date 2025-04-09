function calculateGrade(score) {
    if (score >= 80 && score <= 100)
      return "Grade A";
    else if (score >= 70 && score <= 79)
      return "Grade B";
    else if (score >= 60 && score <= 69)
      return "Grade C";
    else if (score >= 50 && score <= 59)
      return "Grade D";
    else if (score < 50)
      return "Grade F";
    else
      return "Invalid score"; // บั๊ก 1: เงื่อนไขนี้ไม่เคยถูกเรียกใช้
  }
  
  console.log(calculateGrade(85)); // ควรได้ A

  
  //lllllllllllllllllllllllllllllllllllllllll
  