import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderSectionHeader = (imgUrl, title) => {
    const style = {
      backgroundImage: "url(/hangai.png)",
      minHeight: "150px"
    };

    return (
      <div className="Section-header" style={style}>
        <h1 className="Section-header-title text-center">{title}</h1>
      </div>
    )
  };

  renderMemberPanel = (imgUrl, name, jobTitle, description) => (
    <div className="Member-panel">
      <div className="Member-panel-body">
        <img src={imgUrl} className="Member-panel-body-photo img-circle" alt={name} />
        <h3 className="Member-panel-body-title"> {name} </h3>
        <p className="Member-panel-body-description"> {jobTitle} </p>
      </div>
      <div className="Member-panel-footer">
        <p className="Member-panel-footer-description text-left"> {description} </p>
      </div>
    </div>
  );

  renderProductPanel = (imgUrl, name, description, link) => (
    <div className="Products-body-panel">
      <div className="col-xs-4">
        <img src={imgUrl} className="Products-body-panel-image" alt={name} />
      </div>
      <div className="col-xs-8">
        <h2> {name} </h2>
        <p> {description} </p>
        <a href={link} className="btn btn-danger"> Check </a>
      </div>
    </div>
  );

  renderNewsPanel = (imgUrl, date, description, link) => (
    <div className="News-body-panel">
      <div className="col-xs-3">
        <img src={imgUrl} className="News-body-list-item-icon img-rounded" alt={date} />
      </div>
      <div className="col-xs-9">
        <h4 className="text-left News-body-list-item-date"> {date} </h4>
        <p className="text-left News-body-list-item-description"> {description} </p>
        <a href={link} className="btn btn-danger"> check </a>
      </div>
    </div>
  );

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <a href="/">
              <img src={ logo } className="App-logo" alt="logo" />
            </a>
            <nav className="navbar-right">
              <ul className="list list-unstyled list-inline">
                <li> <a href="#mission">mission</a> </li>
                <li> <a href="#members">members</a> </li>
                <li> <a href="#products">products</a> </li>
                <li> <a href="#news">news</a> </li>
                <li> <a href="#about">about</a> </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="App-body container">
          <section id="mission">
            <h1>
              日本に、世界に新しい文化を。
            </h1>
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
          <section id="members">
            {this.renderSectionHeader("/hangai.png", "MEMBERS")}
            <div className="row">
              <div className="col-xs-4">
                {this.renderMemberPanel(
                  "/hangai.png",
                  "Seiichiro Hangai",
                  "Outside Director",
                  "1975年東京理科大学工学部電気工学科卒，1981年同大学大学院理工学研究科博士課程了，工学博士。現在、東京理科大学理事ならびに工学部電気工学科教授。1996年～97年に在外研究員としてスタンフォード大学に滞在、2010年～2014年に工学部長。生体認証に関わるISO/IEC JTC1 SC37データフォーマットの国際標準化に貢献。文部科学省、人事院などの委員を歴任。"
                )}
              </div>
              <div className="col-xs-4">
                {this.renderMemberPanel(
                  "/katayori.png",
                  "Katayori Hoge",
                  "Outside Director",
                  "1975年東京理科大学工学部電気工学科卒，1981年同大学大学院理工学研究科博士課程了，工学博士。現在、東京理科大学理事ならびに工学部電気工学科教授。1996年～97年に在外研究員としてスタンフォード大学に滞在、2010年～2014年に工学部長。生体認証に関わるISO/IEC JTC1 SC37データフォーマットの国際標準化に貢献。文部科学省、人事院などの委員を歴任。"
                )}
              </div>
              <div className="col-xs-4">
                {this.renderMemberPanel(
                  "/makino.png",
                  "Emi Makino",
                  "Outside Director",
                  "1975年東京理科大学工学部電気工学科卒，1981年同大学大学院理工学研究科博士課程了，工学博士。現在、東京理科大学理事ならびに工学部電気工学科教授。1996年～97年に在外研究員としてスタンフォード大学に滞在、2010年～2014年に工学部長。生体認証に関わるISO/IEC JTC1 SC37データフォーマットの国際標準化に貢献。文部科学省、人事院などの委員を歴任。"
                )}
               </div>
            </div>
          </section>
          <sections id="products">
            {this.renderSectionHeader("/hangai.png", "PRODUCTS")}
            <div className="Products-body">
              <div className="row">
                <div className="col-xs-6">
                  {this.renderProductPanel(
                    "/hangai.png",
                    "unipro",
                    "hogehogehogheoghoehgoehghohhogehogehogheoghoehgoehghohhogehogehogheoghoehgoehghohhogehogehogheoghoehgoehghoh",
                    "#"
                  )}
                </div>
              </div>
            </div>
          </sections>
          <sections id="news">
            {this.renderSectionHeader("/hangai.png", "NEWS")}
            <div className="News-body">
              <ul className="News-body-list list-unstyled">
                <li className="News-body-list-item">
                  {this.renderNewsPanel(
                    "/hangai.png",
                    "2017/8/29",
                    "hogehogehogheoghoehgoehghohhogehogehogheoghoehgoehghohhogehogehogheoghoehgoehghohhogehogehogheoghoehgoehghola",
                    "#"
                   )}
                </li>
              </ul>
            </div>
          </sections>
          <section id="about">
            {this.renderSectionHeader("/hangai.png", "ABOUT")}
            <div className="About-body">
              <ul className="list list-unstyled">
                <li> 会社名: 株式会社Shinonome (Shinonome inc.) </li>
                <li> 設立日: 2016年8月25日 </li>
                <li> 資本金: 6,200,000円　</li>
                <li> 所在地: 〒112-0005 東京都文京区水道1-5-16-802 </li>
              </ul>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </section>
        </div>
        <footer className="App-footer">
          <p> &copy; 2016 Shinonome inc. All rights reserved </p>
        </footer>
      </div>
    );
  }
}

export default App;
