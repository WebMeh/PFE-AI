import React from 'react';
import { useLocation } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Col, Row } from 'react-bootstrap';

const styles = StyleSheet.create({
    page: {

    },
    title: {
        color: 'blue', textAlign: 'center', marginLeft: '45%', paddingTop: '3%'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: 'auto',
        flexDirection: 'row',
    },
    tableCol: {
        width: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableCell: {
        margin: 5,
        fontSize: 10,
    },
    list: {
        fontSize: 10,
        marginBottom: 5,
    },
});

const FichePedagogique = () => {
    const location = useLocation();
    const formData = location.state;

    return (
        <>
            Les objectifs
            <ul>
                {formData.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                ))}
            </ul>
            <h3>Les prérequis</h3>
            <ul>
                {formData.prerequisites.map((prerequis, index) => (
                    <li key={index}>{prerequis}</li>
                ))}
            </ul>
            <h3>Autres fields</h3>
            <ul>
                <li>
                    Etablissement : {formData.etablissement}, est une <span className='text-success'> {formData.level} </span>
                </li>
                <li>
                    Module : {formData.moduleName}
                </li>
                <li>
                    Chapitre : {formData.chapterName}
                </li>
                <li>
                    Durée : {formData.duration} H
                </li>
                <li>
                    Classe : {formData.classRoom}
                </li>
            </ul>
            <h3>Déroulement de la séance</h3>
            <ul>
                <li>
                    Motivation : {formData.phase1} min
                </li>
                <li>
                    Construction du savoir : {formData.phase2} de la séance
                </li>
                <li>
                    Evaluation : {formData.phase3} de la séance
                </li>
            </ul>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.title}>
                        <Text style={{ textAlign: 'center' }}>Fiche Pédagogique</Text>
                    </View>
                    <hr />
                    <View style={styles.section}>
                        <Text>1. Identification : {formData.classRoom}</Text>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Etabissement</Text>
                                </Text>
                                <Text style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Module</Text>
                                </Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Professeur</Text>
                                </Text>
                                <Text style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Séquence</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <hr />
                    <View style={styles.section}>
                        <Text>2. Préparation</Text>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Objectifs</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{formData.objectives}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Matériel nécessaire</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{formData.materials}</Text>
                                </View>
                            </View>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Prérequis</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>{formData.prerequisites}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <hr />
                    <View style={styles.section}>
                        <Text>3. Déroulement de la séance</Text>
                        <View>
                            <Text style={styles.list}>- {formData.question1}</Text>
                            <Text style={styles.list}>- {formData.question2}</Text>
                            <Text style={styles.list}>- {formData.question3}</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    );
};

export default FichePedagogique;