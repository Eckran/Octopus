import React, { Component } from 'react'
import { View, ScrollView, TouchableHighlight, Text, Button, Image, StyleSheet, AppRegistry } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

export default class Contact extends React.Component {

    render() {

        let iconSize = 50

        return (
            <View>
                <View style={{ height: 100, marginTop: '-8%' }}>
                    <TouchableHighlight style={styles.backButton}>
                        <Icon
                            name='navigate-before'
                            color='#f3f4f3'
                            size={iconSize}
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </TouchableHighlight>
                    <Image
                        source={require('../../img/fondmenu.png')}
                        style={styles.FondMenu}
                    />
                    <Text style={{ marginTop: -55, marginLeft: '20%', color: '#f3f4f3', fontSize: 30 }}> Informations Légales </Text>
                </View>
                <View style={{height:10,}}></View>
                <View style={{height: '87%',}}>
                    <ScrollView contentContainerStyle={styles.container}>
                    
                        <Text style={styles.text}>CONDITIONS GENERALES D’UTILISATION DE L’APPLICATION Octopuce.</Text>
                        <Text style={styles.text}>A l’attention de l’utilisateur : Veuillez lire attentivement les présentes conditions générales d’utilisation car elles régissent votre accès et votre utilisation de cette Application et vous lient juridiquement à LSS.</Text>
                        <Text style={styles.text}>En cliquant sur les boutons Télécharger/Installer/ «J’accepte», vous acceptez d’être lié par les présentes conditions générales d’utilisation et vous vous engagez à vous y conformer. A défaut d’accepter les termes de ces conditions générales d’utilisation, vous ne pourrez pas télécharger/installer/utiliser l’Application.</Text>
                        <Text style={styles.text}>Veuillez quitter cette installation si vous décidez de ne pas accepter les termes.</Text>
                        <Text style={styles.text}>CONDITIONS GENERALES D’UTILISATION</Text>
                        <Text style={styles.text}>2. ACCES. Certaines fonctions de l’Application nécessitent que vous vous connectiez à Internet par le biais de votre téléphone mobile. Il vous appartient de vous équiper à vos frais du ou des matériel(s) nécessaire(s) afin de pouvoir vous connecter à Internet. Tous les coûts afférents à l’accès à l’Application, que ce soient les coûts relatifs aux matériels, aux logiciels ou à l’accès à Internet, sont à votre charge exclusive.</Text>
                        <Text style={styles.text}>3. EXCLUSION DE RESPONSABILITE. Les informations contenue dans l’Application, y compris, notamment, les informations médicales, les images et toute autre information, vous sont communiqué à titre d’information. Bien que Octopuce ait fait ses meilleurs efforts pour s’assurer de l’exactitude de ces informations et pour décrire les pratiques généralement reconnues, sa responsabilité et celle de ses concédants, auteurs, rédacteurs, contributeurs et éditeurs respectif ne pourra être engagée, et ce dans la limite autorisée par le droit applicable, au titre des erreurs au omissions ou de toute autres conséquence découlant de l’utilisation de ces informations. De même, dans la limite autorisée par la loi applicable, Octopuce et ses concédants, auteurs, rédacteur, contributeurs et éditeurs respectifs n’accordent aucune garantie, expresse ou tacite, quand à l’accumulation, l’exhaustivité ou l’exactitude des informations contenues dans l’Application. L’utilisation de ces informations pour une situation particulière reste de votre seule responsabilité.</Text>
                        <Text style={styles.text}>4. INFORMATION MEDICALES/MALADIES. Bien que certaines informations contenues dans l’Application concernent certaines maladies et/ou leurs traitements, vous devez consulter votre propre médecin. Octopuce vous propose un diagnostic médical personnalisé mais ne vous donne aucuns conseils de traitements. Seul votre médecin est en mesure d’évaluer votre diagnostic et de vous fournir des informations quand à vos possibilités de traitement. VEUILLEZ CONSULTER VOTRE MEDECIN.</Text>
                        <Text style={styles.text}>5. DONNEES PERSONNELLES. Nous vous informons qu’Octopuce ne recueille aucune de vos données personnelles dans le cadre de votre utilisation de l’Application. Pour faciliter l’apport de mises à jour logicielles, Octopuce est susceptible de collecter des données techniques relatives à votre navigation dans l’Application, votre appareil mobile et votre système d’exploitation.</Text>
                        <Text style={styles.text}>Ces données recueillies ne nous permettent pas de vous identifier et vous pouvez à tout moment désactiver cette fonctionnalité en vous rendant dans les paramètres de l’Application. Les médecins ou autres professionnels de santé qui recevraient de votre part, par e-mails ou tout autre moyen écrit, les données renseignées dans l’Application, effectuent un traitement de données personnelles de santé dont ils sont responsables. En conséquence, lesdits médecins ou autre professionnels de santé sont tenues au respect des dispositions de la loi « informatique et libertés » du 6 janvier 1978 modifiée et doivent notamment effectuer les formalités nécessaires à la déclaration du traitement de données personnelles ainsi réalisé auprès de la Commission Nationale de l’Informatique et des Libertés.</Text>
                        <Text style={styles.text}>6. LICENCE. Sous réserve des termes des présentes, Octopuce vous accorde le droit de limité, non exclusif et incessible d’accéder à et d’utiliser l’Application. Vous n’êtes pas autorisés à louer, vendre, sous-licencier, céder, prêter, distribuer, exporter, transférer, ou permettre à des tiers d’utiliser l’Application, la technologie ou toute autre information qu’elle contient De même, vous n’êtes pas autorisé à créer des œuvres dérivées ou à modifier l’Application, la technologie ou toute autre information qu’elle contient Cette licence prendra automatiquement fin si vous n’en respectez pas les termes. Vous êtes tenus au respect du droit applicable aux présentes. En conséquence, vous ne pouvez pas utiliser, télécharger ou exporter l’Application en violation du droit applicable à ces conditions générales d’utilisation.</Text>
                        <Text style={styles.text}>7. MAINTIEN EN VIGUEUR. Les stipulations des Articles 7, 8, 9, 10, 11, 15, 16 (et l’un des quelconque de leurs alinéas) et 17 resteront en vigueur après l’expiration ou la résiliation des présentes pour quelque motif que ce soit. Cette survie s’appliquera jusqu’à la prescription de toute action relative aux droits et obligations objets de la clause concernée.</Text>
                        <Text style={styles.text}>8. ASSISTANCE. Octopuce n’assure pas la maintenance de l’Application, ni l’assistance à son utilisation.</Text>
                        <Text style={styles.text}>9. LIENS HYPERTEXTES. Octopuce ou certains tiers sont susceptibles de vous proposer des liens hypertextes dirigeant vers d’autres sites Internet. La responsabilité d’Octopuce ne pourra pas être engagée du fait de la mise à disposition et/ou de votre utilisation des données, logiciels ou de toute autre information ou contenu disponibles sur ces sites Internet tiers. Vous reconnaissez et acceptez qu’Octopuce ne pourra pas être tenue pour responsable des dommages ou pertes causés par la mise à disposition et/ou l’utilisation de ces données, logiciels ou autres informations.</Text>
                        <Text style={styles.text}>10. EXCLUSION DE GARANTIES. VOUS RECONNAISSEZ ET CONVENUE QUE L’APPLICATION EST FOURNIE « EN L’ETAT » ET « DANS LA MESURE DE SA DISPONIBILITE ». OCTOPUCE NE GARANTIT PAS QUE L’APPLICATION REPONDRA A VOS BESOINS, NI QU’ELLE SERA CONSTAMMENT DISPONIBLE OU QUE SON UTILISATION SERA ININTERROMPUE, EXEMPLE D’ERREURS OU QU’ELLE NE CAUSERA PAS DE TROUBLE A VOTRE TELEPHONE MOBILE OU VOTRE TERMINAL DE CONNEXION ; DE MEME OCTOPUCE N’ACCORDE AUCUNE GARANTIE QUANT AUX RESULTATS OBTENUS PAR L’UTILISATION DE L’APPLICATION OU QUANT À L’EXACTITUDE OU LA FIABILITÉ DES INFORMATIONS CONTENUES DANS L’APPLICATION (EN CE COMPRIS LES INFORMATIONS PROVENANT DE TIERS PARTENAIRES DE OCTOPUCE OU DE SITES INTERNET DE TIERS). DE MEME, OCTOPUCE NE GARANTIT PAS QUE LES DÉFAUTS DE L’APPLICATION SERONT CORRIGÉS. OCTOPUCE ET SES PARTENAIRES TIERS EXCLUENT TOUTE GARANTIE DE TOUTE SORTE, EXPRESSE, IMPLICITE OU LÉGALE, Y COMPRIS, NOTAMMENT, TOUTE GARANTIE DE PROPRIÉTÉ, D'ADÉQUATION À UN USAGE SPÉCIFIQUE ET DE NON-VIOLATION DES DROITS DE TIERS. VOUS RECONNAISSEZ ET CONVENEZ QUE TOUTE INFORMATION OU TOUTE DONNÉE OBTENUE LORS DE L’UTILISATION DE L’APPLICATION SERA UTLISÉE À VOS RISQUES ET A VOTRE SEULE DISCRÉTION. VOUS SEREZ SEUL RESPONSABLE DES DOMMAGES CAUSÉS A VOTRE SYSTÈME INFORMATIQUE OU DE TOUTE PERTE DE DONNÉES QUI DÉCOULERAIT DU TÉLÉCHARGEMENT DE CES INFORMATIONS ET DE CES DONNÉES. LES EXCLUSIONS DE GARANTIES PRÉVUES AU PRÉSENT ARTICLE SONT APPLICABLES DANS LES LIMITES AUTORISÉES PAR LA LOI APPLICABLE.</Text>
                        <Text style={styles.text}>11. LIMITATION DE RESPONSABILITÉ. VOUS RECONNAISSEZ ET CONVENEZ QUE OCTOPUCE ET SES CONCÉDANTS RESPECTIFS NE SERONT PAS RESPONSABLES, DANS LES LIMITES AUTORISÉES PAR LA LOI APPLICABLE, DES DOMMAGES DIRECTS, INDIRECTS, ACCESSOIRES, ET/OU CONSÉCUTIFS, Y COMPRIS, NOTAMMENT, DE TOUS DOMMAGES CORPORELS, MATÉRIELS, IMMATÉRIELS, PERTES DE DONNÉES, PERTES DE BÉNÉFICES OU INTERRUPTIONS D’ACTIVITÉ RÉSULTANT OU SURVENUS DANS LE CADRE : (I) DE VOTRE UTILISATION DE L’APPLICATION OU DE L’UTILISATION DE L’APPLICATION PAR UN TIERS A PARTIR DE VOTRE COMPTE ; (II) DU COÛT DE RÉCUPÉRATION DES DONNÉES, INFORMATIONS OU LOGICIELS DE REMPLACEMENT ; (III) DE TOUT ACCÈS NON AUTORISÉ A OU DE TOUTE ALTÉRATION DE VOS COMMUNICATIONS OU DE VOS DONNÉES ; OU (IV) DE TOUT AUTRE DOMMAGE RESULTANT DU TÉLÉCHARGEMENT OU DE L’UTILISATION DE L’APPLICATION. DE PLUS, VOUS ÊTES SEUL RESPONSABLE DE LA SAISIE, DU STOCKAGE ET/OU DE LA COMMUNICATION DE VOS DONNÉES PERSONNELLES DANS L’APPLICATION.</Text>
                        <Text style={styles.text}>12. RÉSILIATION. Ces conditions générales d’utilisation resteront en vigueur jusqu’à leur résiliation, celle-ci pouvant intervenir à tout moment à votre initiative ou à l’initiative de OCTOPUCE. À compter de la résiliation des présentes, vous vous engagez à cesser toute utilisation de l’Application et à supprimer et désinstaller définitivement toute copie de l’Application. En cas de non-respect par l’une des parties de l’un quelconque des termes de ces conditions générales d’utilisation, les droits de la partie en défaut au titre des présentes prendront fin de plein droit sans notification préalable de l’autre partie.</Text>
                        <Text style={styles.text}>13. PROPRIÉTÉ INTELLECTUELLE. Vous reconnaissez (a) que l’Application comporte des informations confidentielles et d’autres données et informations protégées notamment par le droit de la propriété intellectuelle et (b) que OCTOPUCE et/ou des tiers détiennent tous les droits, titres et participations dans et sur l’Application et les logiciels fournis par l’intermédiaire de l’Application ou en association avec celle-ci, y compris, notamment, l’ensemble des Droits de Propriété Intellectuelle y relatifs. Les termes « Droits de Propriété Intellectuelle » désignent l’ensemble des droits existants et à venir protégés par le droit des marques, le droit des brevets, les dispositions du droit applicable relatives à la protection du secret industriel, le droit d’auteur, le droit de la concurrence ou tous autres droits de propriété, et ce, pour le monde entier. Vous vous interdisez, et interdisez à tout tiers (i) de copier, de vendre, de concéder en licence, de distribuer, de céder, de modifier, d’adapter, de traduire, de créer des œuvres dérivées, de décompiler, de procéder à la rétro-ingénierie, de désassembler ou d’essayer d’obtenir ou de reconstituer le code source de l’Application et de ses composants, sauf si cela vous est autorisé, (ii) de prendre toute mesure visant à contourner ou à anéantir les mesures de protection contenues dans l’Application, (iii) d’utiliser l’Application afin d’accéder, de copier, de transférer, de transcoder ou de retransmettre tout contenu en violation de toute loi applicable ou de tout droit de tiers ou (iv) de supprimer, de dissimuler ou de modifier les mentions relatives au droit d’auteur, aux marques ou à toute autre mention relative aux droits de propriété de OCTOPUCE ou de tiers apposées sur ou contenue dans l’Application.</Text>
                        <Text style={styles.text}>14. USAGES INTERDITS DE L’APPLICATION. Vous vous interdisez de revendre l’Application, son utilisation ou tout accès à celle-ci.</Text>
                        <Text style={styles.text}>15. CESSION. Vous vous interdisez de céder ou de transférer vos droits nés des présentes conditions générales d’utilisation sans l’accord préalable et écrit d’OCTOPUCE. OCTOPUCE pourra céder l’intégralité de ses droits et obligations aux termes des présentes à toute filiale, société affiliée ou à tout cessionnaire de tout ou partie de son activité ou de ses actifs.</Text>
                        <Text style={styles.text}>16. CLAUSES GÉNÉRALES.</Text>
                        <Text style={{ marginTop: 5, }}>16.1 Vous consentez à accéder à et à utiliser l’Application conformément aux lois et réglementations applicables et vous vous interdisez toute utilisation de l’Application à des fins illégales.</Text>
                        <Text style={{ marginTop: 5, }}>16.2 Le présent contrat est soumis au droit français et à la compétence des juridictions françaises.</Text>
                        <Text style={{ marginTop: 5, }}>16.2 Le présent contrat est soumis au droit français et à la compétence des juridictions françaises.</Text>
                        <Text style={{ marginTop: 5, }}>16.3 Dans le cas où une ou plusieurs stipulation(s) des présentes serai(en)t déclarée(s) illégale(s) ou nulle(s) par quelque juridiction que ce soit, la validité, la légalité ou l'application des autres stipulations des présentes n'en sera pas affectée et OCTOPUCE et vous convenez de vous rencontrer afin de substituer à ladite stipulation, une nouvelle stipulation valide qui lui soit aussi proche que possible tant sur le plan juridique qu’économique.</Text>
                        <Text style={{ marginTop: 5, }}>16.4 Le fait pour OCTOPUCE de ne pas se prévaloir d’un manquement par vous à l’une quelconque de vos obligations en vertu des présentes, ne saurait être interprété comme une renonciation à l’obligation en cause.</Text>
                        <Text style={{ marginTop: 5, }}>16.5 Les titres des articles des présentes conditions générales d’utilisation sont mentionnés uniquement pour en faciliter la lecture par les parties et n’ont aucune portée légale ou contractuelle.</Text>
                        <Text style={{ marginTop: 5, }}>16.6 Ces conditions générales d’utilisation reflètent l’accord définitif, exclusif et entier existant entre vous et OCTOPUCE. Elles annulent et remplacent tout autre contrat ou accord, écrit ou oral, antérieur ou actuel, entre vous et OCTOPUCE.</Text>
                        <Text style={styles.text}>17. EXCLUSIONS ET LIMITATIONS. LES LIMITATIONS OU EXCLUSIONS DE GARANTIE ET DE RESPONSABILITE MENTIONNEES DANS CES CONDITIONS GENERALES D’UTILISATION VOUS SONT OPPOSABLES DANS LA LIMITE DU DROIT APPLICABLE.</Text>
                        <Text style={styles.text}>18. CONTRAT. Par les présentes, vous déclarez et reconnaissez être juridiquement lié par les termes de ces conditions générales d’utilisation à compter du téléchargement de l’Application.</Text>
                    
                    </ScrollView>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    header: {
        position: 'absolute',
        width: 400,
        height: 80,
    },
    container: {
        justifyContent: 'center',
        marginLeft: '3%',
    },
    text: {
        marginTop: 10,
    },
    FondMenu: {
        width: '150%',
        height: '160%',
        marginLeft: '-10%',
        marginTop: '-40%',
    },
    backButton: {
        marginLeft: '-85%',
        marginTop: '14%',
        zIndex: 1,

    },
})

AppRegistry.registerComponent('Contact', () => Contact);