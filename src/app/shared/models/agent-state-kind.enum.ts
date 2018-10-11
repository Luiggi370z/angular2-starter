// tslint:disable:no-bitwise

export enum AgentStateKind {
  None = 0,
  AgentConnected = 1,
  InCampaign = 2,
  InReady = 4,
  InSession = 8,
  InCall = 16,
  InWaiting = 32,
  InPreview = 64,
  InDialing = 128,
  Transfer = 256,
  Callback = 512,
  GroupClosed = 1024,

  AgentOnBreak = AgentConnected | InCampaign, // 3
  AgentReady = AgentConnected | InCampaign | InReady, // 7
  AgentInSession = AgentConnected | InCampaign | InReady | InSession, // 15
  AgentOnCall = AgentConnected | InCampaign | InReady | InSession | InCall, // 31
  AgentPreview = AgentInSession | InPreview, // 71
  AgentDialing = AgentInSession | InDialing, // 143

  AgentInSessionWaiting = AgentInSession | InWaiting, // 47
  AgentOnCallWaiting = AgentOnCall | InWaiting, // 63

  AgentOnCallReceivingTransfer = AgentOnCall | Transfer, // 287
  AgentOnCallWaitingTransfer = AgentOnCallWaiting | Transfer, // 319
  AgentOnCallWaitingCallback = AgentOnCallWaiting | Callback, // 575
  AgentInSessionWaitingCallback = AgentInSessionWaiting | Callback, // 559
  AgentInSessionTransfer = AgentInSession | Transfer, // 271
}
