import { Injectable } from "@angular/core";
import { IFeedback } from "./feedback";

@Injectable()
export class WelcomePageService {

    getFeedbacks(): IFeedback[] {
        return [
            {
                "feedbackDate": Date.now(),
                "feedbackId": 1,
                "feedbackText": "Prvi feedback",
                "feedbackAnonymous": false,
                "feedbackPublic": true
            },
            {
                "feedbackDate": Date.now(),
                "feedbackId": 2,
                "feedbackText": "Drugi feedback",
                "feedbackAnonymous": false,
                "feedbackPublic": true
            },
            {
                "feedbackDate": Date.now(),
                "feedbackId": 3,
                "feedbackText": "Treci feedback",
                "feedbackAnonymous": false,
                "feedbackPublic": true
            }
        ];  //dummy podaci TODO: napraviti poziv backendu za podatke.
    }
}