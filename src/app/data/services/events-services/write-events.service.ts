/***
 *    ██╗    ██╗██████╗ ██╗████████╗███████╗
 *    ██║    ██║██╔══██╗██║╚══██╔══╝██╔════╝
 *    ██║ █╗ ██║██████╔╝██║   ██║   █████╗
 *    ██║███╗██║██╔══██╗██║   ██║   ██╔══╝
 *    ╚███╔███╔╝██║  ██║██║   ██║   ███████╗
 *     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝
 *
 *    ███████╗██╗   ██╗███████╗███╗   ██╗████████╗███████╗
 *    ██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
 *    █████╗  ██║   ██║█████╗  ██╔██╗ ██║   ██║   ███████╗
 *    ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ╚════██║
 *    ███████╗ ╚████╔╝ ███████╗██║ ╚████║   ██║   ███████║
 *    ╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
 *
 *    ███████╗███████╗██████╗ ██╗   ██╗██╗ ██████╗███████╗
 *    ██╔════╝██╔════╝██╔══██╗██║   ██║██║██╔════╝██╔════╝
 *    ███████╗█████╗  ██████╔╝██║   ██║██║██║     █████╗
 *    ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██║██║     ██╔══╝
 *    ███████║███████╗██║  ██║ ╚████╔╝ ██║╚██████╗███████╗
 *    ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚═╝ ╚═════╝╚══════╝
 *
 */
import { Injectable } from '@angular/core';

// MY IMPORTS
import { IEventModel } from './../../models/event.model';


@Injectable({
  providedIn: 'root'
})
export class WriteEventsService {

/***
 *    ┌┬┐┌─┐┌┬┐┬ ┬┌─┐┌┬┐┌─┐
 *    │││├┤  │ ├─┤│ │ ││└─┐
 *    ┴ ┴└─┘ ┴ ┴ ┴└─┘─┴┘└─┘
 */
  public putEvents(events: Array<IEventModel>): void {
    console.log(events);
  }

}
