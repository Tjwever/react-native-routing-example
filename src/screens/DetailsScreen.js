import { TabRouter } from '@react-navigation/native'
import { Button, Text, View, SafeAreaView, StyleSheet } from 'react-native'

export default function DetailsScreen({ navigation, route }) {
    const { user } = route.params

    return (
        <SafeAreaView style={styles.flexy}>
            <View>
                <Text style={styles.homieOnOut}>Details Screen</Text>

                <Button
                    title='Go to Home'
                    onPress={() => navigation.navigate('Home')}
                />
                <Button title='Go back' onPress={() => navigation.goBack()} />

                <View style={styles.usersDetails}>
                    <View style={styles.usersFlex}>
                        <Text>User ID: </Text>
                        <Text>{user.id}</Text>
                    </View>
                    <View style={styles.usersFlex}>
                        <Text>Full Name: </Text>
                        <Text>{user.name}</Text>
                    </View>
                    <View style={styles.usersFlex}>
                        <Text>User Name: </Text>
                        <Text>{user.username}</Text>
                    </View>
                    <View style={styles.usersFlex}>
                        <Text>Email: </Text>
                        <Text>{user.email}</Text>
                    </View>
                    <View style={styles.usersFlex}>
                        <Text>Company Name: </Text>
                        <Text>{user.company.name}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flexy: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
    },
    homieOnOut: {
        textAlign: 'center',
        padding: 40,
    },
    usersDetails: {
        paddingTop: 40,
        // textAlign: 'center',
    },
    usersFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
