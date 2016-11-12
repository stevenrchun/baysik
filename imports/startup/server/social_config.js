import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
    // Add Facebook configuration entry
    ServiceConfiguration.configurations.update(
        {service: "facebook"},
        {
            $set: {
                
                appId: "207474692996808",
                secret: "76160a61e35128e5a11697485259579f"

                /*
                appId: "210094212734856",
                secret: "04bbb6198555137bf6cd90f50b57554f",
                */
            }
        },
        {upsert: true}
    );
});