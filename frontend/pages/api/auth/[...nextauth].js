import NextAuth from "next-auth/next"; 
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        try {
            const userExists = await enduser.findOne({
                email: profile.email
            });
            if(!enduser) {
                await enduser.create({
                    email: profile.email,
                    name: profile.name.replace(" ","").toLowerCase(),
                    
                })
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    async signIn({ Profile }) {
        try {
            
        } catch (error) {
            
        }
    }
})

export { handler as GET, handler as POST };