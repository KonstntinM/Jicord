const discordService = require("./discord-service")
const profileImageService = require("./profileImage-service")

const { Webhook, MessageBuilder } = require('discord-webhook-node');

/* REQ

{
  "self": "https://headofcontent.atlassian.net/rest/api/2/10061",
  "id": 10061,
  "key": "HOC-61",
  "changelog": {
    "startAt": 0,
    "maxResults": 0,
    "total": 0,
    "histories": null
  },
  "fields": {
    "statuscategorychangedate": "2020-10-04T16:00:01.752+0200",
    "issuetype": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/issuetype/10012",
      "id": 10012,
      "description": "Ein Videoprojekt, das sich in Unteraufgaben teilt.",
      "iconUrl": "https://headofcontent.atlassian.net/secure/viewavatar?size=medium&avatarId=10322&avatarType=issuetype",
      "name": "Produktion",
      "subtask": false,
      "fields": null,
      "statuses": [],
      "namedValue": "Produktion"
    },
    "timespent": null,
    "customfield_10030": null,
    "project": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/project/10001",
      "id": 10001,
      "key": "HOC",
      "name": "Head of Content",
      "description": null,
      "avatarUrls": {
        "48x48": "https://headofcontent.atlassian.net/secure/projectavatar?pid=10001&avatarId=10407",
        "24x24": "https://headofcontent.atlassian.net/secure/projectavatar?size=small&s=small&pid=10001&avatarId=10407",
        "16x16": "https://headofcontent.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10001&avatarId=10407",
        "32x32": "https://headofcontent.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10001&avatarId=10407"
      },
      "issuetypes": null,
      "projectCategory": null,
      "email": null,
      "lead": null,
      "components": null,
      "versions": null,
      "projectTypeKey": "business",
      "simplified": false
    },
    "customfield_10031": null,
    "customfield_10032": null,
    "fixVersions": [],
    "customfield_10033": null,
    "customfield_10034": null,
    "aggregatetimespent": null,
    "resolution": null,
    "customfield_10035": null,
    "customfield_10028": "2020-10-31",
    "resolutiondate": null,
    "workratio": -1,
    "watches": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/issue/HOC-61/watchers",
      "watchCount": 0,
      "isWatching": true
    },
    "issuerestriction": {
      "issuerestrictions": {},
      "shouldDisplay": false
    },
    "lastViewed": "2020-10-04T16:00:01.764+0200",
    "created": 1601820001579,
    "customfield_10020": null,
    "customfield_10021": null,
    "customfield_10022": null,
    "priority": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/priority/3",
      "id": 3,
      "name": "Medium",
      "iconUrl": "https://headofcontent.atlassian.net/images/icons/priorities/medium.svg",
      "namedValue": "Medium"
    },
    "customfield_10023": null,
    "customfield_10024": null,
    "customfield_10025": null,
    "labels": [
      "redaktions-todo",
      "test"
    ],
    "customfield_10016": null,
    "customfield_10017": null,
    "customfield_10018": {
      "hasEpicLinkFieldDependency": false,
      "showField": false,
      "nonEditableReason": {
        "reason": "PLUGIN_LICENSE_ERROR",
        "message": "Die übergeordnete Verknüpfung ist nur für Jira Premium-Benutzer verfügbar."
      }
    },
    "customfield_10019": "0|i00093:",
    "timeestimate": null,
    "aggregatetimeoriginalestimate": null,
    "versions": [],
    "issuelinks": [],
    "assignee": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/user?accountId=5f4382b63aa35b003f483c28",
      "name": null,
      "key": null,
      "accountId": "5f4382b63aa35b003f483c28",
      "emailAddress": null,
      "avatarUrls": {
        "48x48": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "24x24": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "16x16": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "32x32": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png"
      },
      "displayName": "Konstantin Marx",
      "active": true,
      "timeZone": "Europe/Berlin",
      "groups": null,
      "locale": null,
      "accountType": "atlassian"
    },
    "updated": 1601820001579,
    "status": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/status/1",
      "description": "The issue is open and ready for the assignee to start work on it.",
      "iconUrl": "https://headofcontent.atlassian.net/images/icons/statuses/open.png",
      "name": "Open",
      "untranslatedName": null,
      "id": 1,
      "statusCategory": {
        "self": "https://headofcontent.atlassian.net/rest/api/2/statuscategory/2",
        "id": 2,
        "key": "new",
        "colorName": "blue-gray",
        "name": "New"
      },
      "untranslatedNameValue": null
    },
    "components": [],
    "timeoriginalestimate": null,
    "description": "Das ist ein technischer Test.",
    "customfield_10010": null,
    "customfield_10014": null,
    "customfield_10015": null,
    "timetracking": {
      "originalEstimate": null,
      "remainingEstimate": null,
      "timeSpent": null,
      "originalEstimateSeconds": 0,
      "remainingEstimateSeconds": 0,
      "timeSpentSeconds": 0
    },
    "customfield_10005": null,
    "customfield_10006": null,
    "security": null,
    "customfield_10007": null,
    "customfield_10008": null,
    "customfield_10009": null,
    "aggregatetimeestimate": null,
    "attachment": [],
    "summary": "Meine 1. Produktion",
    "creator": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/user?accountId=5f4382b63aa35b003f483c28",
      "name": null,
      "key": null,
      "accountId": "5f4382b63aa35b003f483c28",
      "emailAddress": null,
      "avatarUrls": {
        "48x48": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "24x24": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "16x16": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "32x32": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png"
      },
      "displayName": "Konstantin Marx",
      "active": true,
      "timeZone": "Europe/Berlin",
      "groups": null,
      "locale": null,
      "accountType": "atlassian"
    },
    "subtasks": [],
    "reporter": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/user?accountId=5f4382b63aa35b003f483c28",
      "name": null,
      "key": null,
      "accountId": "5f4382b63aa35b003f483c28",
      "emailAddress": null,
      "avatarUrls": {
        "48x48": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "24x24": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "16x16": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png",
        "32x32": "https://secure.gravatar.com/avatar/776a144de1ddaf65bd7a71932801c900?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FKM-5.png"
      },
      "displayName": "Konstantin Marx",
      "active": true,
      "timeZone": "Europe/Berlin",
      "groups": null,
      "locale": null,
      "accountType": "atlassian"
    },
    "aggregateprogress": {
      "progress": 0,
      "total": 0
    },
    "customfield_10000": "{}",
    "customfield_10001": null,
    "customfield_10002": null,
    "customfield_10003": null,
    "customfield_10004": null,
    "environment": null,
    "duedate": null,
    "progress": {
      "progress": 0,
      "total": 0
    },
    "votes": {
      "self": "https://headofcontent.atlassian.net/rest/api/2/issue/HOC-61/votes",
      "votes": 0,
      "hasVoted": false
    }
  },
  "renderedFields": null
}*/

async function newProduction (production) {

    console.log("new Production production = " + production);

    let baseUrl = production.self.substring(0, production.self.indexOf('/rest'))

    let title = "Yay! Es wurde eine neue Produktion erstellt."
    let productionTitle = production.fields['summary'] + " (" + production.key + ")"
    let url = baseUrl + "/browse/" + production.key

    attachment = {
      author: {
        name: production.fields.creator.displayName,
        avatar: production.fields.creator.avatarUrls['48x48']
      },
      title: title,
      production: {
        title: productionTitle,
        description: production.fields.description,
        url: url
      }
    }

    discordService.sendAttachment(attachment)
}

module.exports = {
  newProduction
}