import React, {Component} from 'react';
import ThemeContext from "../contexts/theme-context";

class ThemeBar extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{
                theme=>{
                    return (
                        <div className="alert mt-5" style={{backgroundColor: theme.bgColor, color: theme.color}}>
                            style zone
                            <button className={theme.classnames}>
                                style button
                            </button>
                        </div>
                    )
                }
            }
            </ThemeContext.Consumer>
        );
    }
}

export default ThemeBar;