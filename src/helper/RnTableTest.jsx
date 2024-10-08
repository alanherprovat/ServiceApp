import React, { useCallback, useEffect, useState } from 'react';

const RnTableTest = ({ rows, columns, onClick, isCollapsable = true }) => {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (section) => {
    setActiveSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((sec) => sec !== section)
        : [...prevSections, section]
    );
  };

  const styles= {
    previewDataTitle: {
        backgroundColor:'#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    previewDataContent: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    accountSection: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 0,
    },
    accountItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    accountDetails: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    collapsibleAccountDetails: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 8
    },
    accountTitle: {
        fontFamily: 'K2D-Bold',
        fontSize: '14px',
        color: '#333',
        fontWeight:'600'
        // lineHeight: 14,
    },
    accountSubTitle: {
        // marginTop:5,
        fontFamily: 'K2D-Regular',
        fontSize: '12px',
        fontWeight: '400',
    },

    dateSubtitle: {
      marginTop: '5px',
      fontFamily: 'K2D-Regular',
      fontSize: '12px',
      fontWeight: '400',
    },
  
    accountButton: {
        backgroundColor: '#007310',
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
    },
    accountButtonText: {
        fontFamily: 'K2D-Regular',
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    actionGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        marginHorizontal: 8,
        marginVertical: 0,
        justifyContent: 'center',
    },
    actionButton: {
        width: '23%',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        margin: '0.75%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    collapsibleContent: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.03)',
    },
    collapsibleText: {
        fontFamily: 'k2d-regular',
        fontSize: 14,
        color: '#000000',
    },
    actionText: {
        fontFamily: 'k2d-regular',
        marginTop: 5,
        fontSize: 8,
        color: '#333',
    },
};

  const renderItem = useCallback(
    ({ item, index }) => (

      <div key={index} style={{ borderBottom: index === rows?.length - 1 ? 'none' : '1px solid #fff' }}>
        <button
          style={{ padding: '10px', background: 'none', border: 'none', width: '100%', textAlign: 'left' }}
          onClick={() => (isCollapsable ? toggleSection(index) : onClick(item, index))}
        >
          {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
            {columns
              .filter((a) => a?.align === 'full' && !a?.collapsable)
              .map(
                (a, idx) =>
                  !a?.isHidden && (
                    <div key={idx} style={{ marginTop: idx === 0 ? 0 : '5px' }}>
                      {!a?.hideHeader && <span style={{ fontWeight: 'bold' }}>{a?.Header}</span>}
                      {a?.cell ? a?.cell(item[a?.accessor]) : <span>{item[a?.accessor]}</span>}
                    </div>
                  )
              )}
          </div> */}

    {/* Header columns portion */}

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* Left-aligned items */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {columns
                .filter((a) => a?.align === 'left' && !a?.collapsable)
                .map(
                  (a, idx) =>
                    !a?.isHidden && (
                      <div key={idx}  style={{marginTop: idx === 0 ? 0 : 5, display: 'flex', flexDirection: 'column'}}>
                        {!a?.hideHeader && <span style={{ ...styles.accountTitle }}>{a?.Header}</span>}
                        {a?.cell ? a?.cell(a?.accessor ? item[a?.accessor] : item) : <span style={{...styles.accountSubTitle}}>{item[a?.accessor]}</span>}
                      </div>
                    )
                )}
            </div>

            {/* Center-aligned items */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {columns
                .filter((a) => a?.align === 'center' && !a?.collapsable)
                .map(
                  (a, idx) =>
                    !a?.isHidden && (
                      <div key={idx} style={{ marginTop: idx === 0 ? 0 : 5,display: 'flex', flexDirection: 'column' }}>
                        {!a?.hideHeader && <span style={{ ...styles.accountTitle  }}>{a?.Header}</span>}
                        {a?.cell ? a?.cell(a?.accessor ? item[a?.accessor] : item) : <span>{item[a?.accessor]}</span>}
                      </div>
                    )
                )}
            </div>

            {/* Right-aligned items */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {columns
                .filter((a) => a?.align === 'right' && !a?.collapsable)
                .map(
                  (a, idx) =>
                    !a?.isHidden && (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'row' }}>
                      <div key={idx} style={{ marginTop: idx === 0 ? 0 : '5px' }}>
                          {!a?.hideHeader && <span style={{ ...styles.accountTitle,marginBottom: 3  }}>{a?.Header}</span>}
                          {a?.cell ? a?.cell(a?.accessor ? item[a?.accessor] : item) : <span style={{marginTop: 2}}>{item[a?.accessor]}</span>}
                      </div>
                      {isCollapsable && (
                        <div style={{ paddingTop: '20px' }}>
                        {activeSections.includes(index) ? '▲' : '▼'}
                        </div>
                        )}
                    </div>    
                    )
                )}
            </div>

            
          </div>
        </button>

    {/* Colapsable  portion */}

        {isCollapsable && (
          <div style={{ display: activeSections.includes(index) ? 'block' : 'none', padding: '10px', backgroundColor: 'rgba(0,0,0,0.03)' }}>
            {columns
              .filter((a) => {
                // a?.align === 'full' && a?.collapsable
              

                // Check if the column is related to Cheque Receiver and Mode matches "cheque"
                const isChequeColumn =
                    a?.Header === "Cheque Receiver" || a?.Header === "Cheque Receiver Name";
                const showChequeColumns = item.Mode === "Registered Bank Cheque" || item.Mode === "Third Party Bank Cheque" ; // Mode condition

                // Return true for non-cheque columns, or cheque columns only if the mode is "cheque"
                return a?.align === "full" && a?.collapsable && (!isChequeColumn || showChequeColumns);

              })
              .map(
                (a, idx) =>
                  !a?.isHidden && (
                    <div key={idx} style={{ marginTop: idx === 0 ? 0 : '5px' }}>
                      <div>
                        {!a?.hideHeader && <span style={{ ...styles.accountTitle }}>{a?.Header + " : "}</span>}
                        {a?.cell ? a?.cell(a?.accessor ? item[a?.accessor] : item) : <span style={{ ...styles.accountSubTitle }}>{item[a?.accessor]}</span>}
                      </div>
                    </div>
                  )
              )}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Left collapsible columns */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {columns
                  .filter((a) => a?.align === 'left' && a?.collapsable)
                  .map(
                    (a, idx) =>
                      !a?.isHidden && (
                        <div key={idx} style={{ marginTop: idx === 0 ? 0 : '5px' }}>
                          <div>
                            {!a?.hideHeader && <span style={{ fontWeight: 'bold' }}>{a?.Header}</span>}
                            {a?.cell ? a?.cell(a?.accessor ? item[a?.accessor] : item) : <span>{item[a?.accessor]}</span>}
                          </div>
                        </div>
                      )
                  )}
              </div>

              {/* Right collapsible columns */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                {columns
                  .filter((a) => a?.align === 'right' && a?.collapsable)
                  .map(
                    (a, idx) =>
                      !a?.isHidden && (
                        <div key={idx} style={{ marginTop: idx === 0 ? 0 : '5px' }}>
                         
                            {!a?.hideHeader && <span style={{ fontWeight: 'bold' }}>{a?.Header}</span>}
                            {a?.cell ? a?.cell(a?.accessor ? item[a?.accessor] : item) : <span>{item[a?.accessor]}</span>}
                         
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    ),
    [activeSections]
  );

  console.log(rows)

  return (
    <div style={{ width: '100%', height: '70vh', overflow: 'auto' }}>
      {rows.map((item, index) => (
        <div key={index} style={{ width: '100%', borderBottom: '1px solid #526D82BF' }}>
          {renderItem({ item, index })}
        </div>
      ))}
    </div>
  );
};

export default RnTableTest;
