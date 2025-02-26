import { Component, OnInit } from '@angular/core';
import { NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-falling-hearts',
  templateUrl: './falling-hearts.component.html',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf
  ],
  styleUrls: ['./falling-hearts.component.css']
})
export class FallingHeartsComponent implements OnInit {
  hearts: { style: any }[] = [];

  ngOnInit(): void {
    this.createInitialHearts(); // Tạo trái tim ngay lập tức khi vào web
    this.createHearts();
  }

  createInitialHearts(): void {
    for (let i = 0; i < 10; i++) { // Tạo sẵn 10 trái tim ban đầu
      this.addHeart(false);
    }
  }

  createHearts(): void {
    setInterval(() => {
      this.addHeart(true);
    }, 1500); // Tạo trái tim mới mỗi 500ms
  }

  addHeart(hasDelay: boolean): void {
    const heart = {
      style: {
        left: `${Math.random() * 100}%`, // Vị trí ngẫu nhiên
        animationDuration: `${Math.random() * 8 + 8}s`, // Rơi chậm hơn
        animationDelay: hasDelay ? `${Math.random() * 3}s` : '0s', // Không delay nếu là trái tim ban đầu

      }
    };
    this.hearts.push(heart);

    // Xóa trái tim sau 16 giây để tránh tốn bộ nhớ
    setTimeout(() => {
      this.hearts.shift();
    }, 16000);
  }

  // createHearts(): void {
  //   setInterval(() => {
  //     const heart = {
  //       style: {
  //         left: `${Math.random() * 100}%`, // Vị trí ngẫu nhiên theo chiều ngang
  //         animationDuration: `${Math.random() * 8 + 8}s`, // Tốc độ rơi ngẫu nhiên
  //         animationDelay: `${Math.random() * 3}s`, // Độ trễ ngẫu nhiên
  //       }
  //     };
  //     this.hearts.push(heart);
  //
  //     // Xóa trái tim sau khi rơi xong để tránh lãng phí bộ nhớ
  //     setTimeout(() => {
  //       this.hearts.shift();
  //     }, 10000); // Xóa sau 5 giây
  //   }, 500); // Tạo trái tim mới mỗi 500ms
  // }
}
