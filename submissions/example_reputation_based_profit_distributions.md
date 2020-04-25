# Process: Reputation-based Profit Distributions :moneybag: :smiley:

## 1. Practice / Process ID

**Reputation-based Profit Distributions**

## 2. Category

- performance management
- compensation and incentives

- size: crews & organizations

## 3. Summary

In traditional companies with bosses, and even in some self-managed organizations salary negotiations and distributions of bonuses are an opaque and mysterious process. Simple money incentives or even team incentives created unwanted dynamics, and often a feeling of being devalued as a human.![img](https://lh3.googleusercontent.com/4r-2qWr7qE_v7FZjjDG34t8jBo9s6btsZDouL9KPZCp7n0uNKObv3i6wJwo9CR1Ya0YW-YkGv7szTzihcRWBovSOv3fDIkG4_OzaNTQ-iCUEmsQRIM4s35Y8jEgO6JcK8JhActpb)
This process introduces a reputation metric to the organization that is open and transparent. An example is given how the metric can be used to distribute profits in the form of crypto currency to the partners.

The process consists of a task policy which determines how any organization member can propose a task to earn reputation for. Once a task is delivered the reputation is then recorded using the colony framework. Colony calculates a decaying reputation metric which can be read from it’s smart contracts and used by a payment splitter contract to distribute a reward proportional to the reputation of all members.

## 4. Benefits

- An **open task proposal platform**: an interface where partners can prose tasks and an amount of reputation they desire to receive when the task is completed. A challenge duration is introduced so that tasks that don’t align with the organization purpose can be filtered out.
- A **transparent reputation metric**: The delivery of tasks is concluded by the recording of reputation in the Colony system. Colony has a reputation miner that can record reputation on a skill level. To avoid a disadvantage for newcomers in comparison with veterans, a decay system makes sure that all reputation is halved over the duration of 90 days.
- A **profit/bonus distribution system**: We present a simple smart contract that can split an ERC20 or Ether payment into a list of addresses and amounts. This contract can be used to distribute profits or bonuses according to the reputation collected.
- A **platform for merit-based voting**: Having a reputation metric visualizes the merit contributed by each partner of an organization. Once the task system is followed by a majority of the organization the resulting reputation data can be used as a weighted input to decision making in the organization.

## 5. Adoption Requirements:

### 5.1 :globe_with_meridians: Org Structure

- Members of the organization should have sufficient experience with task-based work. The ability to break down large portions of work into tasks that take a day or less is needed to avoid inaccuracies in reputation assignment.
- Partners need a web-3 enabled wallet and must be proficient in off-boarding the received crypto-rewards into a medium that is useful for them.

### 5.2 :scroll: Policies

- **Reputation-earning Tasks**

  Tasks are defined as any action or project that isare aligned with the purpose of the organization. All completed tasks can earn reputation, but tasks have to be broken down into activities that can be done in 12 hours or less, so that the risk of misestimation doesn’t affect the process.

  _A task is defined as follows:_

  **Title** - succinct name for the task. Example: run a keyword experiment for the new product.

  **Scope** - A list of specific things which should be done to deliver the bounty. These could be seen as requirements to verify/review the bounty against.

  **Deliverables** - Artifacts produced as the result of this bounty. Something that could be verified/reviewed. Some examples: updated code, deployment made, blog post published, public event conducted etc.

  **Size** - estimated effort of task and size of payout.

  **Objecting Tasks** - Any task can be objected to by anyone in the colony workspace for 2 days after its creation. A valid objection should describe how the task is harming the organization. The objector must ensure that their objection is clearly communicated to the bounty proposer and admin and e.g. not misunderstood as a minor comment on the issue.If the tension was integrated successfully or if there weren’t any public objections, the task is considered approved.

  **Task Payout** - It is the workers responsibility to request the payout of the task in the colony workspace after it has been delivered and reviewed.

### 5.3 :performing_arts: Roles

1.)
_Role Title_

-

_Purpose_

-

_Domains_

-

_Accountabilities_

-

### 5.4 :hammer_and_wrench: Tools

1.)

- Colony
- Colony is a platform for community collaboration. Its current product accessible at https://colony.io/dashboard allows every organization to create a workspace where new tasks can be suggested, tasks can be accepted then by admins and later delivered and paid out.
- link: `https://colony.io/`

2.)

- Payment Splitter Contract
- The payment splitter contract is an Ethereum smart contract that can accept a single payment and slit it according to shares to many recipients. The contract can be initialized with the reputation queried from the Colony reputation miner and the addresses of Partners of the organization to achieve a profit or bonus distribution.
- link: [Splitter Contract](https://github.com/leapdao/leap-contracts/blob/master/contracts/misc/PaymentSplitter.sol)

### 5.5 :heart: Values

-

## 6. Integration Steps / Instructions

### 6.1 "first Step"

#### A. first action

- instructions

![pic](url)

#### B. second action

- instructions

![pic](url)

### 6.2 "second step"

#### A. first action

- instructions

![pic](url)

#### B. 2nd step

- instructions

![picture](url)

###

### Supporting Examples:

Task sizes can be modeled as GitHub issue labels. An example allocation of reputation points can be mapped to t-shirt sizes:

- size-XS: < 3 hours - 200 reputation points
- size-S: < 5 hours - 350 reputation points
- size-M: < 8 hours - 550 reputation points
- size-L: < 12 hours - 900 reputation points
