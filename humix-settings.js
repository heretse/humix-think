/**
* © Copyright IBM Corp. 2016
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/
var path = require('path');

var humixSettings = module.exports = {

    appName: 'humix-test-taipei',//humix-secom-demo

    port: 3000,

    // 'local' or 'bluemix'
    location: 'bluemix',

    // 'couch' , 'redis'
    // NOTE: couch is the only supported option when using bluemix location
    storage: 'couch',
    couchUrl: 'https://4fa75cd1-58c9-40f8-b564-f0ea711bd506-bluemix:9490c5b340b894b4db5f02b357cf59bf1a6fec84543e2080bcb1049cd2d4a4f5@4fa75cd1-58c9-40f8-b564-f0ea711bd506-bluemix.cloudant.com',
    //couchUrl: 'http://127.0.0.1:5984/',

    //storage: 'redis',
    //redisConfig: {
    //     redisPort: "6379",
    //     redisIP: "127.0.0.1",
    //     redisPassword: "",
    //     dbSelect: "0"
    //},



    /* NodeRed settings */

    uiPort: 3000,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,

    // Add the bluemix-specific nodes in
    nodesDir: path.join(__dirname, "server/nodes"),

    // Blacklist the non-bluemix friendly nodes
    nodesExcludes: [
        '66-mongodb.js',
        '75-exec.js',
        '35-arduino.js',
        '36-rpi-gpio.js',
        '25-serial.js',
        '28-tail.js',
        '50-file.js',
        '31-tcpin.js',
        '32-udp.js',
        '23-watch.js'
    ],

    // Enable module reinstalls on start-up; this ensures modules installed
    // post-deploy are restored after a restage
    autoInstallModules: true,

    // Move the admin UI
    httpAdminRoot: '/node-red',
    httpNodeRoot: '/node-red',
    
    // You can enable user authentication on the Editor and Admin API by adding the following into your file:
    // The users property is an array of user objects. This allows you to define multiple users,
    // each of whom can have different permissions.
    // The password property is a suitable password hash.
    // You can run the following command from within the Humix-Think install directory:
    // node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" password
    
    //adminAuth: {
    //    type: "credentials",
    //    users: [{
    //        username: "admin",
    //        password: "$2a$08$1090YdNK2YEgJoc4JvozXOE22kE/dyj0gjQv5RInvMwn91fq6eynK",
    //        permissions: "*"
    //    }]
    //},

    httpStatic: path.join(__dirname, 'public'),

    functionGlobalContext: {},

    //userDir: process.env.PWD + '/humix_data',
};


