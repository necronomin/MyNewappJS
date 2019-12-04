class Github {
    constructor() {
        this.client_id = '950126756e70d57c476c';
        this.client_secret = '27559ddb1e8025277493a9ab7ea60f0845ee7dca';
    }



    async getUser(user) {
        const profileResponse = await fetch('URL');

        const profile = await profileResponse();
        return {
            profile
        }
    }
}