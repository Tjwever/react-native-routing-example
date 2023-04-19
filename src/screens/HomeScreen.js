import { Button, Text, View, SafeAreaView, StyleSheet } from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.flexy}>
            <View>
                <Text style={styles.homieOnOut}>Home Screen</Text>
                <Button
                    title='Go to Users'
                    onPress={() => navigation.navigate('Users')}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flexy: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homieOnOut: {
        textAlign: 'center',
        padding: 40,
    },
})
