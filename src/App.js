import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <nav className="navbar-left">
              <img src={logo} className="App-logo" alt="logo" />
            </nav>
            <nav className="navbar-right">
              <ul className="list list-unstyled list-inline">
                <li><a href="#section1">hoge</a></li>
                <li><a href="#mission">mission</a></li>
                <li><a href="#about">about</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="App-body">
          <section id="section1">
            <h1>HOGEEEEEEEEEEEEEEEEEEEEEEEEEEe</h1>
          </section>
          <section id="mission">
            <h1>日本に、世界に新しい文化を。</h1>
            <p>
              株式会社Shinonomeは、文化を作るために活動している小さな会社です。
            </p>
            <p>
              2016年現在、その活動の皮切りとして大学内に小さな組織を構築し、
              学生が学内にいながら様々なことに挑戦できるインフラ設備を整えています。
            </p>
            <p>
              知識の早熟化に伴い、学生は学ぶだけの存在ではなくなりました。
              社会も寛容になり、大人と一緒に仕事をしたり、お金を稼ぐこともできるようになりました。
              しかし、その恩恵にあずかれるのはごく一部の学生のみであり、大部分の学生はその日暮らしで生きています。
              我々は、その現状を打破すべくしてこの活動をしています。
            </p>
            <p>
              人は誰しも、夢を持って生きているはずです。
              しかし多くの人々が挫折を経験し夢を諦め、今を生きています。
            </p>
            <p>
              勇気あるものにもう一度チャンスを。
              Shinonomeは、挑戦する人を全力で応援します。
            </p>
          </section>
          <section id="about">
            <h1>企業概要</h1>
            <p>
              社名: 株式会社Shinonome (Shinonome inc.)
              代表者名: 種市隼兵
              本社: 〒112-0005 東京都文京区水道１丁目5-16升本マンション802(自宅兼事務所)
              設立: 2016年8月25日
              資本金: 120万円
              従業員数: 5名(役員) + 50名(業務委託契約者)
            </p>
          </section>
        </div>
        <footer className="App-footer">
          <strong>
            &copy; 2016 Shinonome inc. All rights reserved
          </strong>
        </footer>
      </div>
    );
  }
}

export default App;
