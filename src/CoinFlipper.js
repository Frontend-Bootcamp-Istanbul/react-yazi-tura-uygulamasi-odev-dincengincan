


import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';




class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        yazi: 0,
        tura: 0,
    }
     
  }
  
  handleClick = () => {
    let result = Math.random() < 0.5 ? "tura" : "yazi"; 
  
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    
    // Değerler güncellendikten sonra kullanmak için callback olarak geçtim  
    this.setState({donuyor: true, side:result}, () => {
        this.state.side === "tura" 
        ? this.setState({tura : this.state.tura + 1}) 
        : this.setState({yazi : this.state.yazi + 1})
    })

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    // 1 saniyeyi değiştirdiğimde animasyon uzayıp kısalmıyor ??? 
    setTimeout(() => this.setState({donuyor: false}), 1000);
    
    
  };

    //Resetleme fonksiyonu
  reset = () => {
    this.setState({yazi: 0, tura:0})
  };



  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        
        <button onClick={this.handleClick} >At !</button>
        
        <div>
            <button onClick={this.reset} >Reset !</button>
        </div >
        
            <div style={{padding: "5px"}} >
                Toplam Atış Sayısı: <strong> {this.state.yazi + this.state.tura} </strong> 
            </div>
            <div style={{padding: "5px"}}>
                Toplam Tura Sayısı: <strong> {this.state.tura} </strong>
            </div>
            <div style={{padding: "5px"}}>
                Toplam Yazı Sayısı: <strong> {this.state.yazi} </strong>
            </div>
            
        
      </div>
    )
  }
}

export default CoinFlipper;












































