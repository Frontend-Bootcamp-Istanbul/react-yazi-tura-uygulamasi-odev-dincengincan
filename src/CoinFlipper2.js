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
        result: []  
    }
     
  }
  
  handleClick = () => {
    let resultCoin = Math.random() < 0.5 ? "tura" : "yazi"; 
  
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    
    // Değerler güncellendikten sonra kullanmak için callback olarak geçtim  
    this.setState({
                  donuyor: true, 
                  side: resultCoin,}, () => {
        this.state.result.unshift(this.state.side)
        console.log(this.state.result)
    })

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    // 1 saniyeyi değiştirdiğimde animasyon uzayıp kısalmıyor ??? 
    setTimeout(() => this.setState({donuyor: false}), 1000);
    
    
  };

  //Resetleme fonksiyonu
  reset = () => {
    this.setState({yazi: 0, tura:0, result:[]})
  };

  

  render(){
    
    
    
    
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        
        <button onClick={this.handleClick}>At !</button>
        
        <div>
            <button onClick={this.reset} >Reset !</button>
        </div >
        
            <div style={{padding: "5px"}} >
                Toplam Atış Sayısı: <strong> {this.state.result.length} </strong> 
            </div>
            <div style={{padding: "5px"}}>
                Toplam Tura Sayısı: <strong> {this.state.result.filter(item => item === "tura").length} </strong>
            </div>
            <div style={{padding: "5px"}}>
                Toplam Yazı Sayısı: <strong> {this.state.result.filter(item => item === "yazi").length} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> {this.state.result[0]} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> {this.state.result[1]} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> {this.state.result[2]} </strong>
            </div>
            <div style={{padding: "5px"}}>
                <strong> { this.state.result[0] && this.state.result[0] === this.state.result[1] && this.state.result[1] === this.state.result[2] 
                 && <h3 style = {{color: "red"}} >BINGO!</h3> } </strong>
            </div>

            
        
      </div>
    )
  }
}

export default CoinFlipper;