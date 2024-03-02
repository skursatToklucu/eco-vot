---
  title: "Dev Update: Poll and Email Functionality"
  date: "2023-02-17"
  excerpt:
    "Welcome back to the second developer update for the NeutralStack.io site! This update will encapsulate the work I have done since the last update"
  img: "posts/laptop-next-to-plant.jpg"
  alt: "Laptop with an open lid next to a plant on a desk. Photo by James Harrison on Unsplash"
---

![Laptop with an open lid next to a plant on a desk](/images/posts/laptop-next-to-plant.jpg)

Welcome back to the second developer update for the NeutralStack.io site! This update will encapsulate the work I have done since the last update which includes a few new exciting changes and added functionality.

## Email Changes

I have been hard at work the past few weeks working on new email templates for the website. A few weeks ago, I finalized the color scheme (spoiler alert, its purple) on the website which meant that I could also finalize the branding that I have for the site. I created a new logo along with a favicon to go with it, see the icon at the top of the tab. With the color and the logos set, I went out looking for an emailing program which I found pretty quickly, [nodemailer](https://nodemailer.com/about/). Nodemailer is nice because it plugs into our server really easily and it works with the google api; since our email is run through gmail, we can just use OAuth2 to authenticate and send emails.

For those who are not developers, writing code for the web and writing markup for email is very different. Email syntax basically stopped developing since the 90s while the web has only increased in complexity and function. I was not keen to write old markup and so I looked around and found [maizzle](https://maizzle.com/) which also worked with the css framework I decided on which is called (tailwind)[https://tailwindcss.com/]. Using maizzle, I was able to get up and running really fast in terms of templates since they had a lot I could copy over and reuse. Once I figured out the logic for connecting to gmail, it was pretty simple to build the emails and serve them from production.

The two email templates I created are:

1. Styled email for the one time login codes that we use
2. Styled email for when a new poll opens (this is only sent if a user is opted into our newsletter)

End result: styled emails right to your inbox.

## Auto Close Polls

In addition to emails, I decided to also focus on another thing: making sure polls closed when they said they would close. Before this, polls had to be closed manually by admins through our API. However, people have to sleep and its easy to miss a time when a poll would have to be closed. Instead, we close polls in a dynamic way based on two factors:

1. The current time
2. A close time

The current time is just as it sounds: the current time when the program runs into the code. The close time is a time assigned to a poll when it is created, defaulting to a week in length though any amount of time can be passed in. Based on these two times, we look for all open polls and then create a queue of timeouts that will automatically close the poll and tally up the votes to determine the winner of the poll.

With this added functionality, polls now close when they are supposed to.

## Bug fixes

One small bug fix was also included in the recent release: on the website when trying to vote in a poll, if the poll was already close, the webpage would crash. There was a problem with handling the voting return from the server. Now, while you can click options, no vote is recorded and the webpage does not crash.

## Conclusion

These past few weeks brought some great functionality to the site along with a few bug fixes. We are on track to meet our goals on the [timeline](https://neutralstack.io/about/#timeline)

Check back in often or sign up for the [newsletter](https://neutralstack.io/#newsletter) to get notified of future updates! Thank you for taking the time to browse the site and read this post! It means the world to me that I can create a project that will hopefully be used to change lives and help people while growing a game that I know and love.
