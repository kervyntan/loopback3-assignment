"use strict";

module.exports = function (Task) {
  Task.observe("access", async (ctx) => {
    console.log("Access %s matching %s", ctx.Model.modelName, ctx.query.where);
  });

  Task.observe("before save", async (ctx) => {
    const newDueDate = new Date();
    console.log(typeof(ctx.instance.dueDate))
    if (ctx.instance) {
        console.log(typeof(ctx.instance.title))
        if (typeof(ctx.instance.title) != "string") {
            console.log("Title is not a string.")
            ctx.instance.title = "Default title";
        }
        // If due date is set to before today, doesn't make sense
        // set it to 5 days later

        if (ctx.instance.dueDate < newDueDate || (!ctx.instance.dueDate instanceof Date) && (isFinite(ctx.instance.getTime()))){
          console.log("Hey")
            newDueDate.setDate(newDueDate.getDate() + 5);
            ctx.instance.dueDate = newDueDate;
        }
    } else {
        newDueDate.setDate(newDueDate.getDate() + 5);
        ctx.data.dueDate = newDueDate;
    }
  });
};
