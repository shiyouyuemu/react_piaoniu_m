import React, { Component } from 'react'
import { DetailCardWrap,PositionWrap,TicketInfoWrap,ServiceInfoWrap,PromotionWrap } from "./styledDetail"
import { withRouter } from "react-router-dom"
import Stars from "components/stars/Stars"

@withRouter
class DetailCard extends Component {

    goMap=()=>{
        this.props.history.push(`/position/${this.props.venueId}`)
    }

    render() {
        return (
            <DetailCardWrap>
                <div className="card-img">
                </div>
                <div className="card-main">
                    <img className="poster" src={this.props.poster} alt=""/>
                    <div className="info">
                        <div className="top">
                            <div className="title">{this.props.name}</div>
                            <Stars 
                                star={this.props.star}
                                rank={this.props.rank}
                            ></Stars>
                            <div className="price-line">
                                <div className="price-info">
                                    <div className="price">{this.props.lowPrice}</div>
                                    <div className="qi">元起</div>
                                </div>
                                <div className="buy-num"></div>
                            </div>
                        </div>
                    </div>
                    <div className="like-comment">
                        <div className="like">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAppJREFUSA3Nlk2IjWEUx+/MhGTufNgo2WjKisQCU7KYBQtZ+EjKjIRiNFMTC5nNLFgMiVIWiiUTKzaUnVIsLCQuG4kFWfgsM2S4fv/XOa97n3mfe++Md8qp333Ocz7+5973vl+FQmDlcnkFnIUn8Am+wlM4A4uC8nRLrgtOwWNQ3xcowXlYmRaGDskWkPgkxOwziYGM3mPEv8WaiP+Ec9BS1UugCcbA7TJON7RBJ6yHKyAB2QkXwB9NIn8+rrNsgcXQCmvgIrhdw2ny3gKbAcvo8OxME4FDbhtMWO0e1q3mf2ftDcrTLbntoKMlG0wSOEXwYF9aHXGo3Qeyj/Am8TIOf9hOXa/ValZRv7bfAg9Z/x6GsLNiT13l33KnIhV1pQ2aITuswTcSl18S7QoS1M+DgzAI7UE6uqXWj9ZNDX4NsnXRjpwSmpFMYqYG+8nSkZN+VIZZHTZ4opmqcassRjvyS7SaVDK4ZJvu/PSjSmstU9KhHrKffz9anlOCOXdt1lEN1t3pgwU25zRjigz6PTZD13FnUoBzxII6w3M/ydBcAC9sxnD6rQjoAfHAErquG7qRpAJ1HPSumvYj1jlV5QSWwFsrGK1K/sMGveOm+Z61K1OKhC5wf7yNZBZNI4jWfpD9gJ6arRTshl8gm/FwevvAH6P9NYd6koa9FU3THk7vIfAvP+S6Da006jE2CbJLMLdeIzXNcBrcpryt1NNI8nTvAL+X38Ov9c7VTv4WyPSfHmhoSKwIAZ1w70Cm63x1WEtsGTwHmW4QG8OaGe0RWgp665SNwy4Xwt8EehuRvYTlnstlRVB3nzFwu4BzEvzMvY2/MJdhWSKI661DL3duGjwCesTOrjFkFTyDV7BhdqcF6gycD21B+P/f/gatkZ1laeTSrAAAAABJRU5ErkJggg==" alt=""/>
                            <span>想看</span>
                        </div>
                        <div className="comment">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWBJREFUSA3tlr1OAkEUhcHAAygkavhp6Qy1vQUvxwOQWKKJD2DNE0AUCimsiFsYY2iM5fidZTbhL+wgXCCBk3yZmZ2798wdZslkMsg5V4ZHiMBKyi2PsjyzvvNC/0IPdqBvPG5UbRukZ4hXY2Gu3N6DxrVl/KEeqlgYTueUR+yEp7baaTKLpoOs+onfmZVBWt6TcdoObW3+8Laa09eAkacxX+qm8/qOYy1JLNNEo23NJwn3ttWrKjbZ6qTi0z/X/BkyG+/tcB2ncaQfkmO+k4uAPzSRtrrjBy3MLa8+KqzlvTqqtARfEKImQUtvKjxXnveAJPIqxQugo4vYA4Rcb++JmzmUjC/hDVZJdzt5TEx96akNL9zBD0hPkNdLtAXog9SD89Rk6waQ9BbGIOk6fA1dDdAAiuvmDI4neR0+QfqdNG5IexWc5L+BmNRAZtIrmH0NC2vELAdVmDloC4GH9uAPVr2hcd5RxioAAAAASUVORK5CYII=" alt=""/>
                            <span>评论</span>
                        </div>
                    </div>
                </div>
                <div className="card-bar">
                    <div className="time">{this.props.timeRange}</div>
                    <PositionWrap
                        className="position"
                        width="0 0 1px 0"
                        color="#f5f5f5"
                        onClick={this.goMap}
                    >
                        <div className="inner">
                            <div className="name">{this.props.position}</div>
                        </div>
                        <div className="icon">
                            <img src="https://static.piaoniu.com/nuxt-static/img/icon-park2.c5fced0.png" alt=""/>
                        </div>
                    </PositionWrap>
                    <TicketInfoWrap
                        className="ticket-info"
                        width="0 0 1px 0"
                        color="#f5f5f5"
                    >
                        <div className="text">购票须知</div>
                        <div className="arr-right"></div>
                    </TicketInfoWrap>
                    <ServiceInfoWrap
                        className="service-info"
                        width="0 0 1px 0"
                        color="#f5f5f5"
                    >
                        <div className="text">平台保障</div>
                        <div className="service-item">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII=" alt=""/>
                            <span>无票赔付</span>
                        </div>
                        <div className="service-item">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII=" alt=""/>
                            <span>出票保真</span>
                        </div>
                        <div className="service-item">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACnElEQVRIS72W0UsUURTGv3N3dnsLTactKSTSkAyjqJmIiKDHoCgQKowIctdapR5868U/wIdCzV0NhJLoKSmo6C16kFyjJcsSEkKRoJ1tfYmondl7YmabZdZ2dRay+3rPfL97vnvuOUNYZX3TL2/LQ5wiiBPM3AZGvRNOyBDRDEM+CUA+qpu6s1RJhsptGPu6GxCy+sB8iQGFgQ8A3oL4ixPP1ABgLwG7CbBANIac0qemBgv7nvUXwDjQeZIFjQMUJOIhNpX45je358sdJL3/ahMFrS5migFskuQO9fXo44qAjBbtkYybIEoGlcDZ2smhhdUsdPeWD8caTSv/AMyaIFyvTyYG3L1iBs7JSUyA8FDNhjpofuCXH3E3hpt6NhibcuNgnCGWp91MHIDtOQdzc4CYVbPBY9WKl0LMF4BsJTPUYt9JAaB3jTDzhaCptNSm/NlSKbuCXdYcEd1Tp+IRsktRcuAziG+pUyO91djiFBTaA4ZeczH0Q5moeTe8XDhwpB9M1wTld1Baj8TANAgr0FypWipBbfGMVneXIc8x85Hw9OikHWtXF5T8JxB3U1qLPiNgu5pM7Knm9F5xIUSs/lV82Pu9oUXfg2jRBiwx8DKcTJz3C1hL3Nb5qkXvE3CU0gejP1nwYNjjv6F17mKIG3kz17s1NWZ4wX7EHYAe6SdJ3WUBaT3aDMY0CIv5XO64C/ErXgqoYFHmUEyX0nruQrakvmfdCy3n+Up7ixYZetdTydwYTiZaVwZ5IWD6CMh2P+J/7mBWEC2sWaZFCHijX/GSMvXz0LL6lTaTeWc4GZ/wU2klD62kVShKi98O6rtV/Jdm50DWs1276a7rwHEh6zoyi5AVQ5+AWQnMeIe+ANoYaK166Hur41/8tvwG+pnapsUnZS8AAAAASUVORK5CYII=" alt=""/>
                            <span>配送保障</span>
                        </div>
                        <div className="arr-right"></div>
                    </ServiceInfoWrap>
                    {
                        this.props.campaigns.length>0&&(
                            <PromotionWrap
                                className="service-info"
                                width="0 0 1px 0"
                                color="#f5f5f5"  
                            >
                                <ul>
                                    {
                                        this.props.campaigns.map(value=>{
                                            return (
                                                <li key={value.id}>
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAxhJREFUOBGlVM1LVFEUP+cp5fd7kkW1McEiKMKgmUH7skVREkU6PZLELAyiWrQwrEUmBm1aFC2iNmUmRTOjQSZliZl96ChRf4Ab29XGGRW1HN/pdyfuNOiMs/DyHufdc37nd84959zHlGKJ73hamMdOs1BGCmjUnEdZrWz3T6UvBRZpNkKB7lYSqpGlgHG2WYq8xDY5sYhwOOB5oEiJeZJJnoA8Ob/wKZhzdIykGYf8nrsA1hPTdLohh3OrRga0UyI57nMdgX5p4pDfdQsZX2TiWTKMo7lVQwOo9QrUukVIahUxbG2mFDax7f+TKNCijMf9nhYRp4GJ5vB6zaqhXuUYJRVp1CQI0Aid2l7RunhpxG9w/KskzjVmjginnTDt4W5t15mGiq9Xhzc2nVR6rdOYeBnLGJleQqY3kaXDTLWWd6gzHvj/2wEET4oVJQ4F3OfEcW6DUISMessbfLbQT9VUHd8avfFU25ROfy+U6ehmHejuRQ1CF/Lt4KOFILVXjVI11cfXzSMaTgQnDvncMwBn4HAdlj3iTYhKoQz7Sosdmv+m5jiDVhZm2p9+GGzwWVUClK0yHHBXp+BYZJ4IlG52OIIZx+Vg/piRk/tTgQzTG2zHdbqM4rI48jjk8+xf5J1EMdlZttVx5vuR1jqUps/Ksw5xxevfCh5r779LQQ1QTQFUbtnBr0n4omr0pgTO75BUAfA9JqUdY3twRvvEiNW/AdPRhug1mONfLGk7TXtwVAPjJXA7yKG36E0+jv/Kyl7l1ZlqXOyCgEysou1nEP0NgqwRjvRM+VxrNVDLCZ+7FCXrVaTAvrCKSioXkipsLGPtKD0HssPh8T4c0Q3H72YO7+WK4ISyT/jdu+eJujGeuXB8bq7OruF9/RHtGy8XEUcJusoLnJnpz8hqE8jfm1R4MExju4SlC6XKQjrtlmyoww8IcRKvhMQKOtNRVjg7P/cFn+vxfsDh3BipTJTsoemtwIg2OwqXbCUlVg5TAc+2OcfBjJKp9iC9j/E8r/qh9stakx2uPep2YrzuLIsokfNkwLUlkX4p3V9wXTp38EZEtgAAAABJRU5ErkJggg==" alt=""/>
                                                    <span className="desc">{value.desc}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="arr-right"></div>
                            </PromotionWrap>
                        )
                    }
                </div>
            </DetailCardWrap>
        )
    }
}
export default DetailCard