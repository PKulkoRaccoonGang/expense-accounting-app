import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './style.scss'

function Pdf({spends}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(spends)
    }, [spends])

    const styles = StyleSheet.create({
        page: {
            display: 'block',
            backgroundColor: '#E4E4E4',
          color: '#000000',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
        },
        section: {
            padding: 10,
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#E4E4E4',
        },
        title: {
            display: 'block',
            fontSize: 20,
            fontWeight: 700,
            textAlign: 'center',
            backgroundColor: '#E4E4E4',
            paddingBottom: 10,
        }
      });

    const list = items.map(item => {
        return (
        <View style={styles.section} key={item.time_created}>
            <Text style={styles.text}>{item.category}</Text>
            <Text style={styles.text}>-{item.amount}</Text>
        </View>
        )
    })


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.title}>Spends list:</Text>
                </View>
                {list}
            </Page>
        </Document>
    )
}

Pdf.propTypes = {
    spends: PropTypes.array.isRequired,
}

export default Pdf
