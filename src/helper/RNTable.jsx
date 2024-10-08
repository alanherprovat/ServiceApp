import React, { useCallback, useState } from 'react';
import './RnTable.css'; // Assuming you have a CSS file for styling
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Or any other icon library

const RnTable = ({ rows, columns, onClick, isCollapsable = true }) => {
    const [activeSections, setActiveSections] = useState([]);

    const toggleSection = (section) => {
        setActiveSections((prevSections) =>
            prevSections.includes(section)
                ? prevSections.filter((sec) => sec !== section)
                : [...prevSections, section]
        );
    };

    const renderItem = useCallback(({ item, index }) => (
        <div key={index} className="row-item" style={{ borderBottom: index === rows.length - 1 ? 'none' : '1px solid #fff' }}>
            <button className="row-button" onClick={() => isCollapsable ? toggleSection(index) : onClick(item, index)}>
                <div className="column full-column">
                    {columns.filter(a => a.align === "full" && !a.collapsable).map((a, idx) => !a.isHidden && (
                        <div key={idx} className="account-details">
                            {!a.hideHeader && <span className="account-title">{a.header}</span>}
                            {a.cell ? a.cell(item[a.accessor]) : <span className="account-subtitle">{item[a.accessor]}</span>}
                        </div>
                    ))}
                </div>

                <div className="account-item">
                    {/* Left-aligned */}
                    <div className="column left-column">
                        {columns.filter(a => a.align === "left" && !a.collapsable).map((a, idx) => !a.isHidden && (
                            <div key={idx} className="account-details">
                                {!a.hideHeader && <span className="account-title">{a.header}</span>}
                                {a.cell ? a.cell(a.accessor ? item[a.accessor] : item) : 
                                    <span className="account-subtitle">{item[a.accessor]}</span>}
                            </div>
                        ))}
                    </div>

                    {/* Center-aligned */}
                    <div className="column center-column">
                        {columns.filter(a => a.align === "center" && !a.collapsable).map((a, idx) => !a.isHidden && (
                            <div key={idx} className="account-details">
                                {!a.hideHeader && <span className="account-title">{a.header}</span>}
                                {a.cell ? a.cell(a.accessor ? item[a.accessor] : item) : 
                                    <span className="account-subtitle">{item[a.accessor]}</span>}
                            </div>
                        ))}
                    </div>

                    {/* Right-aligned */}
                    <div className="column right-column">
                        {columns.filter(a => a.align === "right" && !a.collapsable).map((a, idx) => !a.isHidden && (
                            <div key={idx} className="account-details">
                                {!a.hideHeader && <span className="account-title">{a.header}</span>}
                                {a.cell ? a.cell(a.accessor ? item[a.accessor] : item) : 
                                    <span className="account-subtitle">{item[a.accessor]}</span>}
                            </div>
                        ))}
                    </div>

                    {isCollapsable && (
                        <span className="icon">
                            {activeSections.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    )}
                </div>
            </button>

            {isCollapsable && (
                <div className={`collapsible-content ${activeSections.includes(index) ? "show" : "hide"}`}>
                    {columns.filter(a => a.align === "full" && a.collapsable).map((a, idx) => !a.isHidden && (
                        <div key={idx} className="account-details">
                            {!a.hideHeader && <span className="account-title">{a.header}</span>}
                            {a.cell ? a.cell(item[a.accessor]) : <span className="account-subtitle">{item[a.accessor]}</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    ), [activeSections]);

    return (
        <div className="rn-table">
            {rows.map((item, index) => (
                <div key={index} className="table-row">
                    {renderItem({ item, index })}
                </div>
            ))}
        </div>
    );
};

export default RnTable;
