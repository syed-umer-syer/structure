const aws = require('aws-sdk')

aws.config.update({
    accessKeyId: global.config.accessKey,
    secretAccessKey: global.config.secretAccessKey,
    region: global.config.region
});

exports.emailSender = async data => {

    var params = {
        Destination: {
            ToAddresses: data.email
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: data.htmlBody
                }

            },
            Subject: {
                Charset: "UTF-8",
                Data: data.subject
            }
        },
        Source: global.config.from
    };

    try {
        let sendPromise = new aws.SES().sendEmail(params).promise();
        let sentEmail = await sendPromise;
        console.log(sentEmail);
        return sentEmail;
    } catch (error) {
        console.log(error);
        return false;
    }
}
