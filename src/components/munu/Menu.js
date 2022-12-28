import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <a href="#">item-1</a>
                    <ul>
                        <li><a href="#">subitem-1</a></li>

                        <li><a href="#">subitem-3</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">item-2</a>
                    <ul>
                        <li><a href="#">subitem-4</a></li>
                        <li><a href="#">subitem-5</a></li>
                        <li>
                            <a href="#">subitem-6</a>

                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    );
};

export default Menu;