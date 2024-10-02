import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BackgroundLayout = ({ children, style, scrollView = true }) => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const onKeyboardDidShow = (e) => {
            setKeyboardHeight(e.height || 0);
        };

        const onKeyboardDidHide = () => {
            setKeyboardHeight(0);
        };

        window.addEventListener('keyboardDidShow', onKeyboardDidShow);
        window.addEventListener('keyboardDidHide', onKeyboardDidHide);

        return () => {
            window.removeEventListener('keyboardDidShow', onKeyboardDidShow);
            window.removeEventListener('keyboardDidHide', onKeyboardDidHide);
        };
    }, []);

    const dismissKeyboard = () => {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    };

    return (
        <div className="safe-area bg-light" onClick={dismissKeyboard}>
            {scrollView ? (
                <div className="overflow-auto" style={{ height: `calc(100vh - ${keyboardHeight}px)`, ...style }}>
                    {children}
                </div>
            ) : (
                <div className="h-100 d-flex flex-column" style={style}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default BackgroundLayout;
