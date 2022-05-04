import React, { Component } from 'react';
import {
  Image, Platform, StyleSheet, Text, View
} from 'react-native';
 export default class WelcomeScreeen extends Component<{}>  
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}> 
              <Text style={styles.textStyle}>Food App</Text>
                 <View style={styles.SplashScreen_ChildView}>  
                 
                       <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/restaurentproject-2b22b.appspot.com/o/Images%2Fionic-food-delivery%20(1).png?alt=media&token=ca3ed5d3-2199-4f27-8179-bbaef401aa23'}}  
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                </View>  
             </View> )  
             let homeScreen=(
               <View style={styles.welcomeScreen}>
                 <Text style={styles.welcomeText}>
                   Welcome to this app. For selecting delicious food go to menu.
                 </Text>
               </View>
             )
         return(  
             <View style = { styles.MainContainer }>  
                {/* <Text style={{textAlign: 'center'}}> Splash Screen Example</Text>   */}
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : homeScreen  
                }  
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        // margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent:'center',  
        alignItems: 'center',  
        // backgroundColor: '#00BCD4', 
        backgroundColor:'#E4D00A', 
        flex:1,  
    }, 
    textStyle:{
       
      paddingLeft:80,
      paddingTop:50,
      //  justifyContent:'center',
      backgroundColor:'#E4D00A',
      fontSize:50,
      fontFamily:'sans-serif',
      color:'white',
    },
    welcomeScreen:{
        justifyContent:'center',  
        alignItems: 'center',  
        // backgroundColor: '#00BCD4', 
        backgroundColor:'#F53B50', 
        flex:1,
    },
    welcomeText:{
      // flex:1,
      // justifyContent:'center',
      // alignItems:'center',
      padding:30,
      borderWidth:4,
      borderRadius:4,
      borderColor:"white",
      fontSize:30,
      fontFamily:'sans-serif',
      color:'white',
    } 
});  

// export default WelcomeScreeen;